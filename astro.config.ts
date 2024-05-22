import { defineConfig } from "astro/config";

import path from "path";
// import path from 'node:path'

export default defineConfig({
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     sass: {
    //       additionalData: '\n@use "@/styles/api.sass" as api\n',
    //     },
    //   },
    // },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
});
