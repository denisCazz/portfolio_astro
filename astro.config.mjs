// astro.config.mjs
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://aboutdenis.eu',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    robotsTxt(),
    sitemap()
  ],
  build: {
    assets: '_astro'
  },
  vite: {
    define: {
      __BASE_URL__: JSON.stringify('/')
    }
  }
});
