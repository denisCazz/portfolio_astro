// astro.config.mjs
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://aboutdenis.eu',
  base: '/',
  output: 'static',
  integrations: [
    robotsTxt(),
    sitemap()
  ],
  build: {
    assets: '_astro'
  }
});
