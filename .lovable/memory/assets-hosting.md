---
name: Image hosting for AWS S3 deploy
description: Site is deployed via GitHub Actions to AWS S3 + CloudFront, so images must be real files in the repo, not Lovable CDN assets
type: constraint
---
Never upload new images via `lovable-assets` (no `.asset.json` pointers). The live site is hosted on AWS S3/CloudFront, which cannot serve Lovable's `/__l5e/...` CDN URLs.

**How to add images:**
- Place binary files directly in `public/images/` (e.g. `public/images/photo.jpg`)
- Reference them by absolute path: `<img src="/images/photo.jpg" />`
- This ensures Vite's build copies them into `./dist`, which GitHub Actions syncs to the S3 bucket

**Why:** `.asset.json` pointers only resolve on `*.lovable.app`. On the AWS-hosted production site they 404.
