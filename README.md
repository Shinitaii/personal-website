# Richmond Glenn Viloria — Personal Website

Source for [rgviloria.vercel.app](https://rgviloria.vercel.app), a SvelteKit portfolio site covering work experience, projects, freelance offerings, certificates, and technical skills.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com/) via `@sveltejs/adapter-vercel`
- [Vitest](https://vitest.dev/) for unit tests, [Playwright](https://playwright.dev/) for e2e

## Project structure

- `src/routes/+page.svelte` — homepage, composed of the section components in `src/lib/sections/`
- `src/routes/projects/[slug]/` — prerendered per-project detail pages, sourced from `src/lib/data/projects.ts`
- `src/routes/sitemap.xml/+server.ts` — sitemap generated from the same project data
- `src/lib/data/projects.ts` — project entries (description, highlights, personal story, live/GitHub links, dates)
- `src/lib/sections/` — homepage sections (Work, Projects, Media, Freelance, Certificates, Skills)
- `src/lib/utils/period.ts` — shared date formatting for ongoing vs. completed work/project periods

## Developing

Install dependencies, then start the dev server:

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> **Node version note:** building locally requires Node 18, 20, or 22 — `@sveltejs/adapter-vercel` does not support Node 24 for local builds.

## Checks

```bash
npm run check      # svelte-check + TypeScript
npm run lint        # prettier + eslint
npm run test:unit   # Vitest
npm run test:e2e    # Playwright
```
