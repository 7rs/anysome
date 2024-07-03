<script lang="ts">
  import { writable } from "svelte/store";

  import Icon from "@iconify/svelte";

  export let isDev: boolean = true;
  export let baseUrl: string = "/";

  let pagefind;
  (async () => {
    const outputPath = isDev ? "dist/" : "";
    const libPath = `/${outputPath}pagefind/pagefind.js`;

    const _pagefind = await import(/* @vite-ignore */ libPath);
    await _pagefind.init();

    return _pagefind;
  })().then((resolve) => (pagefind = resolve));

  async function search(query: string) {
    if (query.length <= 1) {
      return [];
    }
    const searchResult = await pagefind.search(query);
    if (searchResult.results.length <= 0) {
      return [];
    }

    return await Promise.all(searchResult.results.map((result) => result.data()));
  }

  const query = writable("");
</script>

<article>
  <input class="rounded-xl h-12 w-full border-solid border-2 border-black" type="text" bind:value={$query} />
  <!-- Search Result -->
  {#await search($query) then results}
    <div class="flex flex-col">
      {#each results as result}
        <article class="bg-white">
          <a href={baseUrl + result.raw_url}>
            {#if result.meta.icon}
              <Icon icon={result.meta.icon} />
            {/if}
            <h3>{result.meta.title}</h3>
            <p>{result.meta.description}</p>
          </a>
        </article>
      {/each}
    </div>
  {:catch err}
    <div>
      <h3>検索に失敗しました</h3>
      <p>{err.message}</p>
    </div>
  {/await}
</article>
