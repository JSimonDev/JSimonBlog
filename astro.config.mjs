import { defineConfig } from 'astro/config';
import { SITE } from "./src/config";
import preact from "@astrojs/preact";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: SITE.website,
  integrations: [preact(), tailwind(), mdx(), sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "zh"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  output: 'server',
  adapter:  vercel({
    webAnalytics: { enabled: true }
  }),
});