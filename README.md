# Anysome  

  ジャンルを問わないAwesomeリスト。  

## Why Anysome?  

  [Awesomeリスト](https://github.com/sindresorhus/awesome)を知っていますか？
  カテゴリー別でAwesomeなアプリやツールをリスト化しているリポジトリで、
  Awesomeは「素晴らしい」「最高」という意味を持っています。  

  しかし、Awesomeは単純であるが故にいくつかの問題があります。  

<!--  -->
- リポジトリやカテゴリーが多すぎて網羅できない
- 探しにくい
- 簡潔すぎる概要
- 終わったプロジェクトが記載されていて、その旨が書かれていない
<!--  -->

  Anysomeはこれらの問題を解決するために作られました。  

<!--  -->
- 解説ページの作成
- 多言語化に対応
- 検索機能 (解説ページやその他テキスト)
- タグ機能
- 並び替え
- 表示の変更
- 項目のメタデータ追加
<!--  -->

## 技術選定・ツール  

  Anysomeには大量のライブラリやツールを使用しています。
  全てを導入する必要はありませんし、ほとんどはパッケージのインストールと共に導入できます。
  VSCodeを使っていれば、拡張機能を自動でインストールできます。  

### 言語・フレームワーク  

<!--  -->
- [Node.js](https://nodejs.org/en)  
  JavaScriptの実行環境。npmやyarn、pnpmを使用するなら必須。
- [TypeScript](https://www.typescriptlang.org/)  
  JavaScriptの上位互換であり、型を持つ。
- [pnpm](https://pnpm.io/ja/)  
  ストレージにやさしく、高速で、npmやyarnよりも厳格なパッケージマネージャー。
  bunの方が高速だが、一部の開発支援ツールはbunに対応していない。
- [Astro](https://astro.build/)  
- [Astro (VSCode)](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)  
- [Astro (Open VSX)](https://open-vsx.org/extension/astro-build/astro-vscode)  
  SSGで右に出る者無し。特定のUIフレームワークに縛られる必要もない。
  裏でViteを使用していて、Viteの機能を利用できる。
- [Svelte](https://svelte.jp/)  
- [Svelte (VSCode)](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)  
- [Svelte (Open VSX)](https://open-vsx.org/extension/svelte/svelte-vscode)  
  バンドルサイズが3KB以下。構文はReactよりシンプルでAstroの構文と近い。
- [MDX](https://mdxjs.com/)  
- [MDX (VSCode)](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)  
- [MDX (Open VSX)](https://open-vsx.org/extension/unifiedjs/vscode-mdx)  
  Markdown内でJSXのようなコンポーネントを使える言語。タグ内でもMarkdownの構文は使える。
- [UnoCSS](https://unocss.dev/)  
- [UnoCSS (VSCode)](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)  
- [UnoCSS (Open VSX)](https://open-vsx.org/extension/antfu/unocss)  
  TailwindCSSとある程度互換性があって、リセットCSSが強制的につかない。
- [SASS](https://sass-lang.com/)  
- [SASS (VSCode)](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)  
- [SASS (Open VSX)](https://open-vsx.org/extension/syler/sass-indented)  
  セミコロンや波括弧を省略する構文が特徴的で楽。
- [Stylus](https://stylus-lang.com/)  
- [Stylus (VSCode)](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)  
  SASSの基本的な構文と互換性があり、様々な書き方ができる自由な構文を持つ。
<!--  -->

### ツール  

<!--  -->
- [Fontsource](https://fontsource.org/)  
  フォントを外部から読み込まない。フォントの最適化が楽。
- [Iconify](https://iconify.design/)  
- [Astro Icon](https://www.astroicon.dev/)  
  コンポーネントとして呼び出すだけで使えるし、キャッシュや最適化が自動。
- [Autoprefixer](https://github.com/postcss/autoprefixer)  
  生成されるCSSにベンダープレフィックスを自動で追加する。
- [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)  
  CSSの新機能を難なく使えるようにする（実装されていなくても）。
- [Pagefind](https://pagefind.app/)  
  JSのみで検索機能を実装する。WASMがRustで書かれているので速いし、バンドルサイズも大きくない。
- [Giscus](https://giscus.app/ja)  
  GitHub Discussionsをコメント画面として追加する。すべてをGitHubに依存できる。
<!--  -->

### 開発環境・開発支援ツール  

<!--  -->
- [VSCode](https://code.visualstudio.com/)  
- [VSCodium](https://vscodium.com/)  
  オープンソースでクロスプラットフォーム対応のIDE。Astroが推奨している。
  StackBlitzやProject IDXと互換性がある。
- [EditorConfig](https://editorconfig.org/)  
- [EditorConfig (VSCode)](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)  
- [EditorConfig (Open VSX)](https://open-vsx.org/extension/EditorConfig/EditorConfig)  
  書式の設定などの共通化を行う。対応しているエディターが多い。  
- [Prettier](https://prettier.io/)  
- [Prettier (VSCode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [Prettier (Open VSX)](https://open-vsx.org/extension/esbenp/prettier-vscode)  
  フロントエンドの言語に多く対応しているフォーマッタ。
  AstroやSvelte、Stylusにも対応している。
- [Biome](https://biomejs.dev/ja/)  
- [Biome (VSCode)](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)  
- [Biome (Open VSX)](https://open-vsx.org/extension/biomejs/biome)  
  TypeScriptやTSXに対応しているフォーマッタ。Rustで書かれていて高速。
  Linterとしても機能する。
- [ESLint](https://eslint.org/)  
- [typescript-eslint](https://typescript-eslint.io/)  
- [ESLint (VSCode)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
- [ESLint (Open VSX)](https://open-vsx.org/extension/dbaeumer/vscode-eslint)  
  TypeScript用のLinter。AstroやSvelteに対応させることができる。
- [Stylelint](https://stylelint.io/)  
- [Stylelint (VSCode)](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)  
- [Stylelint (Open VSX)](https://open-vsx.org/extension/stylelint/vscode-stylelint)  
  CSS用のLinter。SASSやStylusに対応させることができる。
- [markdownlint (VSCode)](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)  
- [markdownlint (Open VSX)](https://open-vsx.org/extension/DavidAnson/vscode-markdownlint)  
  markdownlintそのものの拡張機能。markdownlintはNode.jsにインストールされることなく、VSCode上でのみ動く。
- [Vitest](https://vitest.dev/)  
  TypeScriptに対応した単体テストツール。Viteと相性が良さそう。
- [Playwright](https://playwright.dev/)  
  ブラウザ対応チェックに使えるE2Eテスト用のツール。Cypressより速い。
- [Lefthook](https://github.com/evilmartians/lefthook)  
  Gitコマンドの実行時にCIを挟んで事前にチェックを行えるツール。
  Huskyとlint-stagedを網羅していて、なおかつ速い。
<!--  -->

### 推奨ツール  

<!--  -->
- [Nushell](https://www.nushell.sh/ja/)  
  クロスプラットフォームで、型の概念や見やすいエラーを追加する。Windowsに直接インストールできる唯一のシェルでもある。Rustで書かれているので高速。
- [Starship](https://starship.rs/ja-jp/)  
  クソみたいなプロンプトを劇的に改善する。Rustで書かれているので高速。
- [fnm](https://github.com/Schniz/fnm)  
  Node.jsのバージョンマネージャー。一部のOSで導入が難しいが、使い勝手は良い。
  Rustで書かれているので高速。
- [Pretty TypeScript Errors (VSCode)](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)  
- [Pretty TypeScript Errors (Open VSX)](https://open-vsx.org/extension/yoavbls/pretty-ts-errors)  
  TypeScriptのエラー表示を改善する拡張機能。
- [Path Intellisense (VSCode)](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)  
- [Path Intellisense (Open VSX)](https://open-vsx.org/extension/christian-kohler/path-intellisense)  
  パスの入力に候補を表示する拡張機能。
- [indent-rainbow (VSCode)](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)  
- [indent-rainbow (Open VSX)](https://open-vsx.org/extension/oderwat/indent-rainbow)  
  インデントごとに強調したハイライトを追加する拡張機能。
- [Error Lens (VSCode)](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)  
- [Error Lens (Open VSX)](https://open-vsx.org/extension/usernamehw/errorlens)  
  エラーの行をハイライトする拡張機能。
<!--  -->
