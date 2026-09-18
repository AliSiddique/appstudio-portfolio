// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://salinash.studio',

  // The original placeholder case studies were replaced by the real ones.
  // Point the old URLs at their closest equivalent rather than 404ing.
  redirects: {
    '/work/ios-app': '/work/ios-app-portfolio',
    '/work/website': '/work/convertpoly',
    '/work/monday-app': '/work/inventory-cloud-platform',
    '/work/framer-template': '/work/gametestprep',
    '/work/shopify-app': '/work/ai-landscape-designer',
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  },

  server: {
    allowedHosts: true
  },

  integrations: [sitemap()]
});
