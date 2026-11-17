# OBII website

This Astro project hosts the OBII marketing site: the homepage (`/`) plus `/how-it-works`, `/experts`, `/companies`, `/pricing` and `/faqs`. These pages follow the V11 design mockups and use the Inter typeface; the homepage styles are in `src/styles/home.css` and the content-page styles in `src/styles/site.css`. The two earlier homepage variants are kept at `/version1` and `/version2` for comparison. The content pages share a header and footer (`src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`) and the navigation links live in `src/lib/nav.ts`. There are no login or sign-up pages here; those links go to the OBII web app. Copy `.env.example` to `.env` and set `PUBLIC_APP_ROOT_URL` to the OBII web app base URL (no trailing slash); login, sign-up, and trial CTAs use that value to build links to `/login` and `/register`.

You need Node.js **22.23.4 or newer**. Run `npm install`, then `npm run dev` for local development (default `http://localhost:4321`). Use `npm run build` to produce a static site in `dist/`, and `npm run preview` to serve that build locally. See [AGENTS.md](./AGENTS.md) for dev-server background mode notes.

There is no analytics or product instrumentation in this repo: no PostHog, Google Analytics, or similar tags, and no autocapture or custom event tracking.

# Notes

Please don't add posthog yet, or if you do - look at the current site's implementation. Importantly, cta_clicked needs to be setup, and some other modification should be made so we can see the traffic from old site to new.

testing if I can publish