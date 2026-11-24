# Salinash Studio

The portfolio site for **Salinash Studio** — the product engineering practice of Ali Siddique.
Built with **Astro** and **Tailwind CSS v4**, deployed as a static site.

## Tech Stack

- **Astro v5** — static site generator
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **Neue Montreal** / Neue Montreal Mono typography
- Vanilla scoped component CSS — no UI framework
- Dark, grid-ruled design system with original pixel-art sprites (tokens in `global.css`)
- `@astrojs/sitemap` for sitemap generation, Vercel Analytics for traffic

## Content model

Everything the site says about the studio lives in **one file**: `src/data/studio.ts`.
Pages read from it; none of them hard-code copy about projects, metrics or the stack.

| Export | What it drives |
| --- | --- |
| `studio` | Name, studio email, bio |
| `metrics` / `outcomes` | The proof bands on the home and about pages |
| `capabilities` | The four disciplines on the home page |
| `process` | The four-stage engagement model (home + services) |
| `stack` | Technical skills, grouped as on the CV |
| `projects` | All eight case studies, including copy and results |
| `timeline` | The C.V. table on the about page |
| `credentials` | Certifications, education and recognition |
| `services` | Engagement types on `/services` |

To add a case study, append a `Project` to `projects` and add a matching `VisualVariant`
branch in `src/components/ProjectVisual.astro`. The route, card, sitemap entry and
next-project link all follow automatically.

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Sticky cell-based nav bar + mobile menu
│   ├── Footer.astro          # CTA, pixel skyline, link grid, full-width wordmark
│   ├── ProjectCard.astro     # Work card with hover clip-path reveal
│   ├── ProjectVisual.astro   # Inline SVG cover art, one per project
│   ├── PixelArt.astro        # Renders a sprite from data/pixels.ts as crisp SVG
│   ├── PixelGrid.astro       # Seeded pixel-mosaic backdrop
│   ├── CapabilityVisual.astro# Mock-ups for the four discipline panels
│   └── ShareButtons.astro    # Blog post share row
├── data/
│   ├── studio.ts             # Single source of truth (see above)
│   └── pixels.ts             # Pixel sprites as character grids + palette
├── layouts/
│   ├── Layout.astro          # Base HTML, SEO meta, JSON-LD schema
│   └── WorkLayout.astro      # Case study chrome: hero, results band, next project
├── pages/
│   ├── index.astro           # Work (homepage)
│   ├── services.astro        # Engagement models and process
│   ├── about.astro           # Studio, track record, skills, C.V.
│   ├── work/[slug].astro     # Case studies, generated from studio.ts
│   ├── blog/                 # Blog index and post route
│   ├── privacy.astro
│   └── legal.astro
└── styles/
    └── global.css            # Font faces, CSS variables, resets
```

## Getting Started

```bash
pnpm install     # install dependencies
pnpm dev         # start dev server
pnpm build       # build to ./dist
pnpm preview     # preview the production build
```

## Notes

- **Pixel art** is drawn as character grids in `src/data/pixels.ts` — each character is a
  palette colour, `.` is transparent, `X` follows the text colour. Add a sprite there and
  render it with `<PixelArt name="…" />`.
- **Project artwork** is inline SVG rather than bitmap screenshots, so covers stay crisp,
  add no image weight, and inherit the site's colour variables. Swap a variant's markup in
  `ProjectVisual.astro` to drop in real product screenshots later.
- **Old work URLs** (`/work/ios-app`, `/work/website`, `/work/monday-app`,
  `/work/framer-template`, `/work/shopify-app`) redirect to their nearest current case study
  via `redirects` in `astro.config.mjs`.
- **Structured data**: `Layout.astro` emits a `ProfessionalService` + `Person` JSON-LD graph
  so search engines read the site as a studio entity with a named founder.
