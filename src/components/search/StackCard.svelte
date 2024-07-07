<script lang="ts">
  import Icon from "@iconify/svelte";

  import type { Stack } from "@scripts/stack-meta.ts";

  export let href: string;
  export let result: any | undefined = undefined;
  export let meta: Stack = result.meta;
</script>

<a {href}>
  <article class="stack-card">
    {#if meta.icon}
      <Icon class="stack-card-icon" icon={meta.icon} />
    {/if}
    <p class="stack-card-name">{meta.name}</p>
    <p class="stack-card-description">{meta.description}</p>
  </article>
</a>
