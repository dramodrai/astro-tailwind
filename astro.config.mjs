import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact"; // import mdx from '@astrojs/mdx';
// https://astro.build/config

import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-tailwind-learn.netlify.app/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), vue(), sitemap(), mdx(), partytown(), image()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['astro','vue','js','css','html','json','jsx','tsx','svelte'],
      wrap: true
    },
    // syntaxHighlight: 'prism',
    drafts: true
  } 
});