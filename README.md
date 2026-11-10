# VAV IT Solutions — Website

Marketing website for **VAV IT Solutions**, built with **Next.js (App Router) + TypeScript** and hand-written CSS.
Inspired by the hexagon navigation of the Phantom template, redesigned around the VAV brand.

## Pages
| Route | What it shows |
|---|---|
| `/` | Hero with animated network + honeycomb quick-nav, feature bento, services, process, why-us, tech stack |
| `/services` | 8 service cards with deep links (`/services#mobile`, etc.) |
| `/solutions` | Filterable grid of solutions we build (Enterprise / Web / Mobile / Desktop / Automation) |
| `/process` | 4-step timeline, engagement models, FAQ |
| `/about` | Story, values, why VAV, tech stack (`/about#stack`) |
| `/contact` | Contact details + enquiry form (service picker, budget chips) |

## Getting started
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content
All copy lives in **`src/lib/site.ts`**: company details, services, solutions, process steps, FAQ, tech stack.
**Update `email`, `phone` and `socials` there before going live** (they are placeholders).

The contact form currently opens the visitor's email app pre-filled. To receive submissions directly,
point `handleSubmit` in `src/components/ContactForm.tsx` at a form service (Formspree, Resend, etc.).

## Brand
- Colours: navy `#050B1A`, cyan `#5EF0FF`, blue `#1E6BFF` (tokens at the top of `src/app/globals.css`)
- Fonts: Sora (headings) + Manrope (body), self-hosted via Fontsource
- Logo concepts: `public/brand/` — concept A ("Signal Hex") is used on the site and as the favicon (`src/app/icon.svg`)

## Deploy
Import the repo on [Vercel](https://vercel.com/new) — zero config needed.
