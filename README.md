# Eru West · Strategy & Communications

Consulting website for Eru West (homepage plus five service pages), built with Next.js (App Router, TypeScript) and Tailwind CSS.

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

- `app/layout.tsx` — fonts (Fraunces + Inter via `next/font`), default SEO/OpenGraph metadata
- `app/page.tsx` — homepage composition
- `app/[slug]/page.tsx` — the five service pages, one static page per entry in `lib/services.ts`:
  `/communications-strategy/`, `/communications-delivery/`, `/paid-promotions/`, `/team-development/`, `/ai-visibility/`
- `app/sitemap.ts` — generates `sitemap.xml` for the homepage and service pages
- `lib/services.ts` — all service copy (homepage card text, service page content, related links) and the contact email. Edit copy here.
- `components/` — one component per homepage section (`Nav`, `Hero`, `WhatIOffer`, `WhyWorkWithMe`, `HowItWorks`, `CTABand`, `Footer`), the shared service page layout (`ServicePage`), plus reusable pieces (`OfferCard`, `StatCard`, `StepCard`, `Eyebrow`, `ServiceIcon`, `Arrow`, `LogoMark`, `EMonogram`). `WhoIWorkWith` is kept but no longer used on the homepage.
- `tailwind.config.ts` — brand colour tokens: `teal-primary` (#1B4B4A), `teal-accent` (#2D6A69), `bg-light` (#F4F6F5), `ink` (#111827), `muted` (#4B5563), `teal-muted` (#CBD5D1)

To add or change a service, edit `lib/services.ts`. Adding a new entry creates its page automatically; give it an icon in `components/ServiceIcon.tsx`.
