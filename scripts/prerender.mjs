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
      "Therapy in Sydney CBD for anxiety, PTSD, phobias, social anxiety, chronic pain, chronic fatigue and stress-responsive physical symptoms. PACFA registered.",
    keywords: "anxiety therapy Sydney, PTSD treatment Sydney, trauma therapy Sydney, generalised anxiety disorder, social anxiety disorder therapy, phobia therapy Sydney, chronic pain therapy, chronic fatigue therapy, vaginismus treatment, teenage counselling Sydney, resource therapy, integrative psychotherapy Sydney",

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
      "Common questions about therapy for anxiety, PTSD, phobia, vaginismus, chronic pain and chronic fatigue with Vanesa Sakota in Sydney CBD.",
    keywords: "anxiety therapy Sydney, PTSD treatment Sydney, vaginismus treatment, chronic fatigue therapy, chronic pain therapy, phobia therapy Sydney, social anxiety disorder therapy, teenage counselling Sydney",

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a referral or Mental Health Care Plan to see you?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, you don't need a referral to see me. If you do have a referral from your GP or specialist - it is most welcome and I will keep your referrer informed of our progress if you wish.",
          },
        },
        {
          "@type": "Question",
          name: "Can therapy actually help with physical symptoms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes - there's strong research behind it. Many chronic symptoms, including pelvic pain, sensitive skin conditions, and persistent fatigue, are shaped by the nervous system and emotional patterns. Therapy that works with both the mind and body can lead to meaningful change and improve quality of life.",
          },
        },
        {
          "@type": "Question",
          name: "What does a session actually look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sessions are 50 minutes. The first session however is a longer appointment to discuss what brings you to therapy and to cover your history. You'll always know what we're doing and why.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I attend sessions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most people, weekly sessions are recommended in the early stages of therapy, particularly when working with chronic symptoms or trauma. As things shift, sessions typically move to fortnightly or as needed. This is something we can discuss and adjust.",
          },
        },
        {
          "@type": "Question",
          name: "What is your cancellation policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I ask for at least 48 hours notice to cancel or reschedule a session. Late cancellations or missed appointments may be charged at the full session rate.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with social anxiety or generalised anxiety, not just trauma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A lot of the people I see aren't coming from a single traumatic event - they're dealing with generalised anxiety, or a persistent social anxiety that's made everyday situations like meetings, dating or socialising feel exhausting. We work with the patterns underneath it, not just the worry on the surface.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer counselling for teenagers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I see older teenagers (16+) for anxiety, social anxiety, family stress and life transitions, alongside my existing adult caseload. If you're not sure whether your teenager's situation is a fit, reach out and we can talk it through before booking.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer addiction counselling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I work with adults navigating addictive patterns - alcohol, substances, or compulsive behaviours - as part of a broader picture of stress and emotional regulation, rather than a standalone addiction program. If you're not sure whether your situation is a fit, reach out and we can talk it through before booking.",
          },
        },
      ],
    },
  },
  {
    path: "/for-providers",
    title: "For Providers | Vanesa Sakota Psychotherapy Sydney",
    description:
      "Referral information and evidence base for clinicians: chronic pelvic pain, vaginismus, vulvodynia, chronic fatigue and trauma therapy in Sydney CBD.",
    keywords: "psychotherapy referrals Sydney, vaginismus treatment, vulvodynia, chronic pelvic pain, chronic fatigue therapy, PTSD treatment Sydney, generalised anxiety disorder, resource therapy",

    jsonLd: null,
  },
  {
    path: "/contact",
    title: "Anxiety, PTSD & Phobia Therapy Appointments Sydney",
    description:
      "Book anxiety, PTSD, phobia and teenage counselling appointments in Sydney CBD. BMA House, 135 Macquarie Street. No GP referral required.",
    keywords: "anxiety therapy Sydney, PTSD treatment Sydney, phobia therapy Sydney, teenage counselling Sydney, vaginismus treatment, social anxiety disorder therapy, chronic pain therapy",
    jsonLd: null,
  },
  {
    path: "/teenage-counselling-sydney",
    redirectTo: "/faqs",
  },
  {
    path: "/resources",
    title: "Trauma, Anxiety & Chronic Pain Resources | Sydney",
    description:
      "Curated resources on trauma, anxiety, PTSD, chronic pain, chronic fatigue, phobia and nervous system regulation from a psychotherapist in Sydney CBD.",
    keywords: "trauma therapy Sydney, anxiety therapy Sydney, PTSD treatment Sydney, chronic pain therapy, chronic fatigue therapy, resource therapy, phobia therapy Sydney",
    jsonLd: null,
  },
  {
    path: "/about",
    title: "Psychotherapist Sydney | Anxiety, PTSD & Chronic Pain",
    description:
      "Vanesa Sakota is a PACFA-registered psychotherapist in Sydney CBD offering anxiety, PTSD, phobia and teenage counselling, and resource therapy.",
    keywords: "psychotherapist Sydney, anxiety therapy Sydney, PTSD treatment Sydney, resource therapy, teenage counselling Sydney, generalised anxiety disorder, social anxiety disorder therapy, chronic pain therapy",

    jsonLd: null,
  },
  {
    path: "/approach",
    title: "Trauma & Anxiety Therapy Approach | Psychotherapist Sydney",
    description:
      "Integrative Sydney CBD approach using ACT, Resource Therapy, clinical parts work, imagery rescripting and EAET for PTSD, phobias, chronic pain and fatigue.",
    keywords: "resource therapy, EAET, ACT therapy Sydney, clinical parts therapy, imagery rescripting, trauma therapy Sydney, PTSD treatment Sydney, phobia therapy Sydney, chronic pain therapy, chronic fatigue therapy",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Acceptance and Commitment Therapy (ACT)",
          serviceType: "Psychotherapy modality",
          provider: { "@id": `${BASE_URL}/#vanesa` },
          areaServed: { "@type": "City", name: "Sydney" },
          description: "Evidence-based framework building psychological flexibility, helping clients stay present with difficult thoughts and feelings rather than being controlled by them.",
        },
        {
          "@type": "Service",
          name: "Clinical Parts Therapy (Resource Therapy)",
          serviceType: "Psychotherapy modality",
          provider: { "@id": `${BASE_URL}/#vanesa` },
          areaServed: { "@type": "City", name: "Sydney" },
          description: "Trauma-informed, psychodynamic framework founded by Professor Gordon Emmerson, addressing attachment wounds and internal conflicts that can drive chronic physical symptoms.",
        },
        {
          "@type": "Service",
          name: "Imagery Rescripting",
          serviceType: "Psychotherapy modality",
          provider: { "@id": `${BASE_URL}/#vanesa` },
          areaServed: { "@type": "City", name: "Sydney" },
          description: "Gently re-entering and updating early memories or relational experiences that may be maintaining a heightened sense of physiological vulnerability.",
        },
        {
          "@type": "Service",
          name: "Emotional Awareness & Expression Therapy (EAET)",
          serviceType: "Psychotherapy modality",
          provider: { "@id": `${BASE_URL}/#vanesa` },
          areaServed: { "@type": "City", name: "Sydney" },
          description: "Neuro-somatic framework developed for chronic pain by Dr. Howard Schubiner and Dr. Mark Lumley, identifying and processing hidden emotional stressors to deactivate the nervous system's chronic threat response.",
        },
      ],
    },
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
    ...(route.keywords ? [`<meta name="keywords" content="${route.keywords}" />`] : []),
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
