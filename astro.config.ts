import { defineConfig } from "astro/config";
import path from "node:path";

import icon from "astro-icon";

import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://7rs.github.io",
  base: "/anysome",
  integrations: [icon(), UnoCSS(), mdx(), svelte()],
  vite: {
    resolve: {
      alias: {
        "@scripts": path.resolve("./scripts"),
      },
    },
  },
});
