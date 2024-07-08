import path from 'node:path';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import UnoCSS from 'unocss/astro';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';

import tsconfig from './tsconfig.json';

let aliasesArray: { [key: string]: string } = {};
for (const [alias, targetPath] of Object.entries(tsconfig.compilerOptions.paths)) {
  aliasesArray = {
    ...aliasesArray,
    ...{ [alias]: path.resolve(targetPath[0]) },
  };
}

// https://docs.astro.build/ja/reference/configuration-reference/
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://7rs.github.io',
  base: '/anysome',
  markdown: { gfm: false },
  integrations: [svelte(), mdx(), UnoCSS(), icon(), purgecss()],
  vite: {
    resolve: { alias: aliasesArray },
  },
});
