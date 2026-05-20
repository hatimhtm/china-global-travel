import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hatimhtm.github.io',
  base: '/china-global-travel',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
          ar: 'ar-MA',
          zh: 'zh-CN',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
