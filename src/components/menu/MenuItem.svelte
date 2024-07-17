<script lang="ts">
  
  import Icon from "@iconify/svelte";

  export let href: string;
  export let icon: string;
</script>

<a {href}>
  <div class="flex items-center gap-3 p-1 rounded-md">
    <Icon {icon} />
    <p><slot /></p>
  </div>
</a>

<style lang="stylus">
  div, div:hover
    transition all 100ms ease-in-out

  div:hover
    background-color rgba(0, 0, 0, 10%)
</style>
