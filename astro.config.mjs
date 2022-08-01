import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
    // syntaxHighlight: 'prism',
    drafts: true,
  }
});