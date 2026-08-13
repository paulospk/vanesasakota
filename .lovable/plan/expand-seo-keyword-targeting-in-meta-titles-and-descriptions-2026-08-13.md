# Expand SEO keyword targeting in meta titles and descriptions

Goal: Increase the site's visibility for the search terms the user listed, without changing any visible page copy.

## What we will change

Only the `<title>`, `<meta name="description">`, and matching OpenGraph tags on the site's pages. No headings, body text, or design changes.

## Research we will use

We already ran a Semrush keyword comparison for the full list (AU database). The high-opportunity terms for this site are the lower-difficulty, service-specific phrases:

- `anxiety therapy sydney` (390/mo, easy)
- `PTSD treatment sydney` (110/mo, easy)
- `phobia therapy sydney` (50/mo, very easy)
- `addiction counselling` (210/mo, very easy)
- `social anxiety disorder therapy` (70/mo, very easy)
- `teenage counselling sydney` (40/mo, very easy)
- `resource therapy` (90/mo, very easy)

High-volume single words like `anxiety`, `PTSD`, `chronic pain`, and `phobia` are very hard to rank for alone, so we will use them as secondary phrases inside descriptions rather than optimising titles for them.

Before editing, we will run a short `keyword_research` pass on the most promising terms to confirm related phrasing and question variations.

## Proposed meta updates by page

| Page | What we will update |
|------|----------------------|
| Home | Title and description to include trauma therapy, anxiety, PTSD, and chronic pain alongside the existing Sydney positioning. |
| About | Title and description to include psychotherapist Sydney, anxiety, PTSD, chronic pain, and trauma therapy. |
| Approach | Title and description to include trauma and anxiety therapy, plus the existing modalities (ACT, Clinical Parts Therapy, EAET) and chronic pain. |
| Contact | Title and description to include appointments for anxiety, PTSD, phobia, trauma therapy, and Sydney CBD. |
| FAQs | Title and description to include anxiety, PTSD, chronic pain, phobia, and physical symptoms. |
| Resources | Title and description to include trauma, anxiety, and chronic pain research. |

All titles will stay under 60 characters and all descriptions under 160 characters. Canonical URLs and `og:url` remain unchanged.

## Verification

After the edits we will run the production build and prerender step so the static HTML served to crawlers includes the new metadata, then resubmit the sitemap and re-check SEO findings.
