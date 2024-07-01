<script lang="ts">
  import { writable } from "svelte/store";

  export let isDev: boolean = true;

  let pagefind = (async () => {
    const outputPath = isDev ? "dist/" : "";
    const libPath = `/${outputPath}pagefind/pagefind.js`;

    const _pagefind = await import(/* @vite-ignore */ libPath);
    await _pagefind.init();

    return _pagefind;
  })();
  let errorMessage: string;

  let resolvePagefind;
  pagefind.then((resolve) => (resolvePagefind = resolve)).catch((err) => (errorMessage = err));

  const query = writable("");
</script>

<article>
  {#await pagefind then pagefind}
    {#await pagefind.search($query) then results}
      {console.log(results)}
    {/await}
  {/await}
</article>
