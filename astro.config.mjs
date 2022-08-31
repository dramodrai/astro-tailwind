import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from "astro-compress";
import image from '@astrojs/image';
import Unocss from '@unocss/astro';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://newastro.netlify.app/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), vue(), sitemap(), mdx(), partytown(), image(), compress(), 
  Unocss(), alpinejs()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  experimental: {
    integrations: true
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['astro', 'vue', 'js', 'css', 'html', 'json', 'jsx', 'tsx', 'svelte', 'bash'],
      wrap: true
    },
    // syntaxHighlight: 'prism',
    drafts: true
  },
  
});