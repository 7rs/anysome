<script lang="ts">
  import Icon from "@iconify/svelte";
  import { writable } from "svelte/store";

  import MenuItem from "./MenuItem.svelte";
  import MenuBox from "./MenuBox.svelte";

  const opened = writable(false);
  const toggleMenu = () => {
    $opened = !$opened;
  };
</script>

<article class="relative">
  <button class="block border-0 bg-transparent text-inherit" on:click={toggleMenu}>
    <Icon class="text-4xl" icon="line-md:menu" />
  </button>
  {#if $opened}
    <MenuBox>
      <MenuItem href="/" icon="line-md:search">Main</MenuItem>
      <MenuItem href="/about" icon="line-md:question-circle">About</MenuItem>
      <MenuItem href="/license" icon="line-md:confirm">License</MenuItem>
    </MenuBox>
  {/if}
</article>
