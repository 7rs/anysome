<script lang="ts">
  import Icon from "@iconify/svelte";

  export let href: string;
  export let icon: string;
</script>

<a {href}>
  <div class="flex items-center gap-3">
    <Icon {icon} />
    <p><slot /></p>
  </div>
</a>
