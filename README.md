# Reagan Strategic Solutions — Website Source Code

Complete source code export for the reaganstrategicsolutions.com marketing website.

## What this is

A modern React-based web application (Next.js 14). It is a static brochure site:
Home, About, Services, Testimonials, Contact (info only), plus Tribal and Business
landing pages and a Site Map. Navy/gold brand design. No forms, no data collection,
no third-party analytics.

## Requirements

- Node.js 18+ and Yarn

## Setup

1. Install dependencies:
   ```
   yarn install
   ```
2. Copy `.env.example` to `.env` and fill in your own values. Most keys are
   optional for the static site; `DATABASE_URL` is only needed if you re-enable
   database-backed features (none are active in the current build).
3. Generate the Prisma client (only if using the database schema):
   ```
   yarn prisma generate
   ```
4. Run the development server:
   ```
   yarn dev
   ```
   The site runs at http://localhost:3000

## Build for production

```
yarn build
yarn start
```

## Project structure

- `app/` — pages and routes (App Router)
- `components/` — shared UI components
- `lib/` — utilities and helpers
- `public/` — static assets (images, logos)
- `prisma/schema.prisma` — database schema (unused by current static site)
- `tailwind.config.ts` — design tokens (brand colors)

## Notes

- All secrets have been removed from `.env.example`. Supply your own before deploying.
- The site can be hosted on any platform that supports Next.js 14 (Vercel, Netlify,
  a Node server, etc.).
