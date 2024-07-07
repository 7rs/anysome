/** @type {import('stylelint').Config} */

export default {
  extends: [
    "stylelint-config-html",
    "stylelint-config-html/svelte",
    "stylelint-config-html/astro",
    "stylelint-stylus/standard",
    "stylelint-config-sass-guidelines",
  ],
  customSyntax: "postcss-html",
  overrides: [
    {
      files: ["*.styl", "**/*.styl"],
      customSyntax: "postcss-styl",
    },
  ],
  rules: {
    "stylus/declaration-colon": "always",
    "declaration-block-trailing-semicolon": "never",
    "stylus/selector-list-comma-newline-after": "always-multi-line",
    "stylus/selector-list-comma": "always",
  },
};
