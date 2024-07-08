<script lang="ts">
  import Icon from "@iconify/svelte";

  import type { Stack } from "@scripts/stack-meta.ts";

  export let href: string;

  export let result: any | undefined = undefined;
  export let meta: Stack | undefined = result?.meta;
  export let name = meta?.name
  export let description = meta?.description
  export let icon = meta?.icon
</script>

<a {href}>
  <article class="stack-card">
    {#if icon?.startsWith("url:")}
      <img class="stack-card-icon" src={icon.slice(4)} alt="icon">
    {:else if icon}
      <Icon class="stack-card-icon" icon={icon} />
    {/if}
    <p class="stack-card-name">{name}</p>
    <p class="stack-card-description">{description}</p> 
  </article>
</a>
