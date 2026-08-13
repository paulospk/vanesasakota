/**
 * prerender-render.mjs
 *
 * Runs after `vite build` + scripts/prerender.mjs.
 *
 * prerender.mjs writes per-route HTML with the correct <head> (title,
 * description, canonical, JSON-LD) but an empty <div id="root">.
 * This script boots a headless Chromium against a local static server,
 * renders each route for real, and writes the resulting DOM of #root back
 * into dist/<route>/index.html.
 *
 * Result: crawlers that do not execute JavaScript (Bing, GPTBot,
 * PerplexityBot, ClaudeBot) get real headings and body copy. The bundle is
 * untouched, so React still mounts and the app behaves identically for
 * real visitors.
 */

import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");

// Routes = every directory in dist that holds an index.html, plus "/".
function collectRoutes() {
  const routes = ["/"];
  for (const entry of fs.readdirSync(DIST, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "assets") continue;
    if (fs.existsSync(path.join(DIST, entry.name, "index.html"))) {
      routes.push(`/${entry.name}`);
    }
  }
  return routes;
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let filePath = path.join(DIST, urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    if (!fs.existsSync(filePath)) {
      // SPA fallback
      filePath = path.join(DIST, "index.html");
    }

    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream",
    });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    try {
      ({ chromium } = await import("@playwright/test"));
    } catch {
      console.warn("⚠ Playwright not available — skipping HTML prerender.");
      return;
    }
  }

  let browser;
  try {
    browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  } catch (err) {
    console.warn(
      `⚠ Could not launch Chromium (${err.message.split("\n")[0]}) — skipping HTML prerender.`
    );
    return;
  }

  const server = await startServer();
  const { port } = server.address();
  const origin = `http://127.0.0.1:${port}`;
  const routes = collectRoutes();

  const page = await browser.newPage({ viewport: { width: 1280, height: 1600 } });

  for (const route of routes) {
    const url = `${origin}${route}`;
    console.log(`  rendering ${route}...`);
    try {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.textContent && root.textContent.trim().length > 50;
        },
        { timeout: 60000 }
      );
    } catch (err) {
      console.error(`  ✗  ${route} render failed: ${err.message}`);
      throw err;
    }

    const rootHtml = await page.evaluate(
      () => document.getElementById("root").innerHTML
    );

    const outFile =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.slice(1), "index.html");

    const html = fs.readFileSync(outFile, "utf-8");
    const start = html.indexOf('<div id="root">');
    const bodyEnd = html.indexOf("</body>", start);

    if (start === -1 || bodyEnd === -1) {
      console.warn(`  ⚠  ${route} — could not locate #root, left as-is`);
      continue;
    }

    const before = html.slice(0, start);
    const after = html.slice(bodyEnd);
    const replaced = `${before}<div id="root">${rootHtml}</div>\n  ${after}`;

    fs.writeFileSync(outFile, replaced);
    console.log(`  ✓  ${route} (${Math.round(rootHtml.length / 1024)} kB rendered)`);
  }

  await browser.close();
  server.close();
  console.log("HTML prerender complete — every route ships real content.");
}

main().catch((err) => {
  console.error("Prerender render step failed:", err);
  process.exit(1);
});
