import { defineConfig } from 'astro/config';
import { SITE } from "./src/config";
import preact from "@astrojs/preact";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [preact(), tailwind(), mdx(), sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});