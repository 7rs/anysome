import path from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import UnoCSS from 'unocss/astro';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import tsconfig from './tsconfig.json';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compressor from 'astro-compressor';
import expressiveCode from 'astro-expressive-code';

let aliasesArray: {
  [key: string]: string;
} = {};
for (const [alias, targetPath] of Object.entries(tsconfig.compilerOptions.paths)) {
  aliasesArray = {
    ...aliasesArray,
    ...{
      [alias]: path.resolve(targetPath[0]),
    },
  };
}

// https://docs.astro.build/ja/reference/configuration-reference/
// https://docs.astro.build/en/reference/configuration-reference/

// https://astro.build/config
export default defineConfig({
  site: 'https://anyso.me',
  markdown: {
    gfm: false,
    shikiConfig: { theme: 'dracula' },
  },
  vite: {
    resolve: {
      alias: aliasesArray,
    },
  },
  integrations: [
    // https://expressive-code.com/
    expressiveCode({
      themes: ['dracula', 'github-light'],
    }),
    // https://mdxjs.com/
    // https://docs.astro.build/ja/guides/integrations-guide/mdx
    // https://docs.astro.build/ja/guides/markdown-content
    mdx(),
    // https://svelte.jp/
    // https://docs.astro.build/ja/guides/integrations-guide/svelte/
    svelte(),
    // https://unocss.dev/
    // https://unocss.dev/integrations/astro
    UnoCSS(),
    // https://www.astroicon.dev/
    icon(),
    // https://docs.astro.build/ja/guides/integrations-guide/sitemap
    sitemap(),
    // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt
    robotsTxt(),
    // https://purgecss.com/
    // https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
    purgecss(),
    // https://github.com/PlayForm/Compress
    playformCompress(),
    // https://github.com/sondr3/astro-compressor
    compressor(),
  ],
});
