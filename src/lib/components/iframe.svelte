<script lang="ts">
  import type { HTMLIframeAttributes } from "svelte/elements";

  export interface IframeProps extends HTMLIframeAttributes {
    ar?: number;
  }

  const { ar = 16 / 9, ...attributes }: IframeProps = $props();
</script>

<iframe {...attributes} style:--aspect-ratio={Math.round(ar * 1000) / 1000}></iframe>

<style lang="scss">
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: var(--aspect-ratio);
    border: 0;
    border-radius: var(--space-16);
  }
</style>
