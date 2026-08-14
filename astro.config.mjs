import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hillaryfayedesign.com',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404.html') && !page.endsWith('/404/'),
    }),
  ],
  output: 'static',
});
