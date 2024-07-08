<script lang="ts">
  import { writable } from "svelte/store";
  import StackCard from "./StackCard.svelte";
  import Icon from "@iconify/svelte";

  import { liveQuery } from "dexie";
  import { dexieClient } from "@scripts/dexie-setup.ts";

  export let isDev: boolean = true;
  export let baseUrl: string = "/";

  $: stacks = liveQuery(() => dexieClient.stacks.toArray());

  let pagefind;
  (async () => {
    const outputPath = isDev ? "/dist" : baseUrl === "/" ? "" : baseUrl;
    const libPath = `${outputPath}/pagefind/pagefind.js`;

    const _pagefind = await import(/* @vite-ignore */ libPath);
    await _pagefind.init();

    return _pagefind;
  })().then((resolve) => (pagefind = resolve));

  const query = writable("");

  function hasQuery(query?: string): boolean {
    if (typeof query === "string") {
      return query.length >= 2;
    } else {
      return $query.length >= 2;
    }
  }

  async function search(query: string): Promise<any[]> {
    // const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    // await sleep(10000);

    const searchResult = await pagefind.search(query);

    if (searchResult.results.length <= 0) {
      return [];
    }

    return await Promise.all(searchResult.results.map((result) => result.data()));
  }
</script>

<article class="anysome-app">
  <input class="input-box" type="text" bind:value={$query} placeholder="" />
  <!-- Search Result -->
  {#key $query}
    {#if hasQuery()}
      {#await search($query)}
        <Icon class="load-icon" icon="svg-spinners:3-dots-scale" />
      {:then results}
        <div class="result-list">
          {#each results as result}
            <StackCard href={baseUrl + result.raw_url} {result} />
          {/each}
        </div>
      {:catch err}
        <div>
          <h3>検索に失敗しました</h3>
          <p>{err.message}</p>
        </div>
      {/await}
    {:else}
      <div class="result-list">
        {#each $stacks || [] as stack (stack.id)}
          <StackCard href={stack.url} icon={stack.icon} name={stack.name} description={stack.description} />
        {/each}
      </div>
    {/if}
  {/key}
</article>
