<script lang="ts">
  import { circInOut } from "svelte/easing";
  import { slide } from "svelte/transition";
</script>

<nav
  class="absolute right-0 rounded-xl py-2 px-4 flex flex-col gap-2 text-2xl z-1 hoverable-disable"
  in:slide={{ duration: 200, easing: circInOut, axis: "y" }}
  out:slide={{ duration: 200, easing: circInOut, axis: "y" }}>
  <slot />
</nav>

<style lang="stylus">
  nav
    top 150%
    backdrop-filter blur(16px)
    box-shadow \
      0px 0px 8px rgba(0, 0, 0, 50%),
      inset 0 0 8px rgba(240, 240, 255, 25%)
    border solid 1px rgba(240, 240, 255, 25%)
    background-color rgba(255, 255, 255, 1%)
</style>
