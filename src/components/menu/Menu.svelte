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
  <button class="bg-transparent border-0 block" on:click={toggleMenu}>
    <Icon class="text-4xl" icon="line-md:menu" />
  </button>
  {#if $opened}
    <MenuBox>
      <MenuItem href="/" icon="line-md:search">main</MenuItem>
      <MenuItem href="/about" icon="line-md:question-circle">about</MenuItem>
    </MenuBox>
  {/if}
</article>
