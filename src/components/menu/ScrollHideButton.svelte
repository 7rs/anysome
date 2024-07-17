<script lang="ts">
  import Icon from "@iconify/svelte";

  const elementList = document.getElementsByTagName("html");
  const htmlElement = elementList.length >= 1 ? elementList[0] : undefined;

  let scrollbarDisplay = localStorage.getItem("scrollbarDisplay")
  if (scrollbarDisplay == null) {
    localStorage.setItem("scrollbarDisplay", "none")
    scrollbarDisplay = "none"
  }

  if (htmlElement != null) {
    htmlElement.style["scrollbar-width"] = scrollbarDisplay;
  }

  const toggleScrollbar = () => {
    if (htmlElement == null) {
      console.error("not found html tag");
      return;
    }

    if (htmlElement.style["scrollbar-width"] === "none") {
      htmlElement.style["scrollbar-width"] = "auto";
      localStorage.setItem("scrollbarDisplay", "auto")
    } else {
      htmlElement.style["scrollbar-width"] = "none";
      localStorage.setItem("scrollbarDisplay", "none")
    }
  };
</script>

<button class="block border-0 bg-transparent color-inherit" on:click={toggleScrollbar}>
  {#if htmlElement?.style["scrollbar-width"] === "none"}
    <Icon icon="line-md:watch-off-loop" />
  {:else}
    <Icon icon="line-md:watch-loop" />
  {/if}
</button>
