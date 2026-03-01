# Jacky Grob — Astro Clone

A faithful clone of [jackygrob.com](https://jackygrob.com) built with **Astro** and **Tailwind CSS v4**.

## Tech Stack

- [Astro v5](https://astro.build) — Static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS (via `@tailwindcss/vite`)
- **Neue Montreal** font (loaded from original CDN)
- Vanilla CSS scoped component styles

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Sticky 3-column navigation header
│   ├── Footer.astro          # Dark CTA section + 4-column footer
│   ├── ProjectCard.astro     # Work project card with hover effect
│   └── DisciplineIcons.astro # SVG icons for the disciplines section
├── layouts/
│   └── Layout.astro          # Base HTML layout with global styles
├── pages/
│   ├── index.astro           # Work page (homepage)
│   ├── about.astro           # About page with CV
│   ├── privacy.astro         # Privacy policy placeholder
│   └── legal.astro           # Legal notice placeholder
└── styles/
    └── global.css            # Global styles, font-face, CSS variables

public/
└── images/                   # Project teaser images
    ├── hsn-teaser.png
    ├── vola-teaser.png
    ├── weave-up-teaser.png
    ├── mosidi-teaser.png
    ├── a-statement-teaser.png
    └── status-growth-teaser.png
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Design Notes

The clone faithfully reproduces:

- **Typography**: Neue Montreal (sans) + Neue Montreal Mono, with fluid `clamp()` sizing
- **Color palette**: Pure black/white with light gray backgrounds and a near-black dark section
- **Layout**: CSS Grid-based 3-column header, 2-column project grid, 4-column info/footer grid
- **Components**: Pill-shaped nav buttons, bordered project cards with hover clip-path animation, monospace uppercase labels
- **Pages**: Work (homepage) and About (with CV timeline)
# appstudio-portfolio
