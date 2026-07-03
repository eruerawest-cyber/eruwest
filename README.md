# Eru West · Strategy & Communications

Single-page consulting website for Eru West, built with Next.js (App Router, TypeScript) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The site is statically exported to `out/` (see `next.config.mjs`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at https://eruwest.com (custom domain configured in repo Settings → Pages; Source must be "GitHub Actions"). The static export also deploys to Vercel as-is.

## Structure

- `app/layout.tsx` — fonts (Fraunces + Inter via `next/font`), SEO/OpenGraph metadata
- `app/page.tsx` — page composition
- `components/` — one component per section (`Nav`, `Hero`, `WhoIWorkWith`, `WhatIOffer`, `WhyWorkWithMe`, `HowItWorks`, `CTABand`, `Footer`) plus reusable pieces (`OfferCard`, `StatCard`, `StepCard`, `Eyebrow`, `LogoMark`, `EMonogram`)
- `tailwind.config.ts` — brand colour tokens: `teal-primary` (#1B4B4A), `teal-accent` (#2D6A69), `bg-light` (#F4F6F5), `ink` (#111827), `muted` (#4B5563), `teal-muted` (#CBD5D1)
