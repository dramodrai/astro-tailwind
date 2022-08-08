import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact"; // import mdx from '@astrojs/mdx';
// https://astro.build/config

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), vue(), sitemap(), mdx(), partytown()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true
    },
    // syntaxHighlight: 'prism',
    drafts: true
  },
  // colorMode: {
  //   preference: 'system', // default theme
  //   dataValue: 'theme', // activate data-theme in <html> tag
  //   classSuffix: '',
  // },
});