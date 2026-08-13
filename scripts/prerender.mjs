/**
 * prerender.mjs
 *
 * Run after `vite build` to generate a real HTML file for every route.
 * Each page gets its own <title>, <meta description>, canonical URL,
 * and JSON-LD already in the <head> — so Google reads real content
 * immediately without waiting for JavaScript to execute.
 *
 * Usage (automatic via package.json "build" script):
 *   npm run build   →   vite build && node scripts/prerender.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const BASE_URL = "https://www.vanesasakota.com.au";

// ── Route manifest ────────────────────────────────────────────────────────────

const routes = [
  {
    path: "/",
    title: "Trauma, Anxiety & PTSD Therapy | Psychotherapist Sydney",
    description:
      "Trauma, anxiety and PTSD therapy in Sydney CBD for chronic pain, phobias, social anxiety and stress-responsive physical symptoms. PACFA registered.",

    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${BASE_URL}/#vanesa`,
          name: "Vanesa Sakota",
          jobTitle: "Psychotherapist",
          description:
            "PACFA-registered psychotherapist in Sydney CBD specialising in anxiety, trauma, chronic stress and psychophysiological conditions including chronic pelvic pain and stress-responsive skin conditions.",
          url: BASE_URL,
          telephone: "+61405933722",
          email: "vanesa@vanesasakota.com.au",
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "Master of Psychotherapy and Counselling",
              recognizedBy: { "@type": "Organization", name: "Western Sydney University" },
            },
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "Bachelor of Psychology",
              recognizedBy: { "@type": "Organization", name: "Griffith University" },
            },
          ],
          knowsAbout: [
            "Trauma therapy",
            "Psychotherapy",
            "Anxiety treatment",
            "Chronic stress",
            "Chronic pain and nociplastic pain",
            "Emotional Awareness and Expression Therapy",
            "Acceptance and Commitment Therapy",
            "Clinical parts therapy",
            "Imagery rescripting",
            "Nervous system regulation",
          ],
          memberOf: {
            "@type": "Organization",
            name: "Psychotherapy and Counselling Federation of Australia",
            alternateName: "PACFA",
            url: "https://www.pacfa.org.au",
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "Vanesa Sakota Psychotherapy",
          description:
            "In-person psychotherapy in Sydney CBD for anxiety, trauma, chronic stress, chronic pelvic pain, vulvodynia, vaginismus and stress-responsive skin conditions.",
          url: BASE_URL,
          telephone: "+61405933722",
          email: "vanesa@vanesasakota.com.au",
          priceRange: "$$",
          image: `${BASE_URL}/og-image.jpg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Level 5, Suite 504, 135 Macquarie Street",
            addressLocality: "Sydney",
            addressRegion: "NSW",
            postalCode: "2000",
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -33.8651,
            longitude: 151.2099,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              description: "By appointment only",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Sydney" },
            { "@type": "State", name: "New South Wales" },
          ],
          knowsAbout: [
            "Trauma therapy Sydney",
            "Psychotherapist Sydney CBD",
            "Anxiety therapy",
            "Chronic pain therapy",
            "Stress and burnout therapy",
          ],
          hasMap: "https://maps.google.com/?q=135+Macquarie+Street+Sydney+NSW+2000",
          employee: { "@id": `${BASE_URL}/#vanesa` },
        },
      ],
    },
  },
  {
    path: "/faqs",
    title: "Psychotherapy FAQs | Anxiety, PTSD, Chronic Pain & Phobia",
    description:
      "Common questions about therapy for anxiety, PTSD, phobia, chronic pain and physical symptoms with Vanesa Sakota in Sydney CBD.",

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a GP referral or Mental Health Care Plan to see you?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You can book directly without a referral. A Mental Health Care Plan is not required.",
          },
        },
        {
          "@type": "Question",
          name: "Can therapy actually help with physical symptoms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — there is strong research behind it. Many chronic symptoms, including pelvic pain, sensitive skin conditions, and persistent fatigue, are shaped by the nervous system and emotional patterns held in the body.",
          },
        },
        {
          "@type": "Question",
          name: "Is everything confidential?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, with the standard exceptions required by law. Everything else stays between us. Vanesa practises in accordance with the PACFA Code of Ethics 2017.",
          },
        },
        {
          "@type": "Question",
          name: "How long will I need to be in therapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on what you are bringing and what you are hoping to achieve. Some people notice meaningful change within a few months. Others benefit from longer-term support.",
          },
        },
      ],
    },
  },
  {
    path: "/for-providers",
    title: "For Providers | Vanesa Sakota Psychotherapy Sydney",
    description:
      "Referral information and evidence base for clinicians. Psychotherapy for chronic pelvic pain, stress-responsive skin and trauma in Sydney.",

    jsonLd: null,
  },
  {
    path: "/contact",
    title: "Anxiety, PTSD & Phobia Therapy Appointments Sydney",
    description:
      "Book anxiety, PTSD and phobia therapy appointments in Sydney CBD with Vanesa Sakota. BMA House, 135 Macquarie Street. No GP referral required.",
    jsonLd: null,
  },
  {
    path: "/resources",
    title: "Trauma, Anxiety & Chronic Pain Resources | Sydney",
    description:
      "Curated resources on trauma, anxiety, PTSD, chronic pain, phobia and nervous system regulation from Vanesa Sakota, psychotherapist Sydney CBD.",
    jsonLd: null,
  },
  {
    path: "/about",
    title: "Psychotherapist Sydney | Anxiety, PTSD & Chronic Pain",
    description:
      "Vanesa Sakota is a PACFA-registered psychotherapist in Sydney CBD offering trauma, anxiety and PTSD therapy for chronic pain and phobias.",

    jsonLd: null,
  },
  {
    path: "/approach",
    title: "Trauma & Anxiety Therapy Approach | Psychotherapist Sydney",
    description:
      "Integrative trauma and anxiety therapy approach in Sydney CBD drawing on ACT, Clinical Parts Therapy, Imagery Rescripting and EAET for PTSD and chronic pain.",
    jsonLd: null,
  },
  {
    path: "/unsubscribe",
    title: "Unsubscribe | Vanesa Sakota",
    description:
      "Manage your email preferences and unsubscribe from communications from Vanesa Sakota Psychotherapy.",
    jsonLd: null,
  },
  {
    path: "/404",
    title: "Page not found | Vanesa Sakota",
    description:
      "The page you requested could not be found. Return to Vanesa Sakota Psychotherapy to explore our services.",
    jsonLd: null,
  },
];

// ── HTML builder ──────────────────────────────────────────────────────────────

function buildHeadTags(route) {
  const url = `${BASE_URL}${route.path}`;
  const tags = [
    `<title>${route.title}</title>`,
    `<meta name="description" content="${route.description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${BASE_URL}/og-image.jpg" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${route.title}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
  ];
  if (route.jsonLd) {
    tags.push(
      `<script type="application/ld+json">\n${JSON.stringify(route.jsonLd, null, 2)}\n</script>`
    );
  }
  return tags.join("\n    ");
}

// ── Write files ───────────────────────────────────────────────────────────────

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

for (const route of routes) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<meta name="author"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:[^>]*>/g, "")
    .replace(/<meta name="twitter:[^>]*>/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");

  html = html.replace("</head>", `    ${buildHeadTags(route)}\n  </head>`);

  const outDir =
    route.path === "/"
      ? DIST
      : path.join(DIST, ...route.path.split("/").filter(Boolean));

  if (route.path !== "/") fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
  console.log(`  ✓  ${route.path}`);
}

console.log("\nPrerender complete — all routes have static HTML.");
