<script lang="ts">
  import type { HTMLIframeAttributes } from "svelte/elements";

  interface Props extends HTMLIframeAttributes {
    ar?: number;
  }

  const { ar = 3 / 2, ...attributes }: Props = $props();
</script>

<iframe {...attributes} style:--aspect-ratio={ar}></iframe>

<style lang="scss">
  iframe {
    width: 100%;
    height: 100%;
    aspect-ratio: var(--aspect-ratio);
    border: 0;
  }
</style>
