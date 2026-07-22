# Ziarra destinations — redesign (Next.js)

A working Next.js implementation of the redesigned destinations flow, built on mock data.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000 (it redirects to `/destinations`).

## Pages

- `/destinations` — main listing: hero, search, sticky filter bar, "explore by country" rail (all 12 countries), and the featured destination grid.
- `/destinations/[country]` — country spotlight page (e.g. `/destinations/kenya`), listing every destination in that country plus attractions and tips. Countries with no live data yet show a "coming soon" state.
- `/destinations/[country]/[destination]` — individual destination detail page (e.g. `/destinations/kenya/maasai-mara`).

## Data

Everything lives in `lib/data.ts` — 12 countries (Kenya and Uganda are "live" with real content pulled from the current site; the other 10 are placeholders marked `coming-soon`) and 4 destinations (Maasai Mara, Naivasha, Malindi, Kisumu). Swap in real data by editing that file — the types are in `lib/types.ts`.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Design tokens (colors, fonts) are defined in `tailwind.config.ts`. Images are placeholder Unsplash photos — swap `next.config.js`'s `images.remotePatterns` if you move to your own CDN.
