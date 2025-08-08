<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    href: `mailto:${string}` | `tel:${string}`;
  }

  const { href, ...attributes }: Props = $props();
  const detectors = $state({
    hasWebDriver: false,
    hasHeadlessInUserAgent: false,
    hasNoUserLanguages: false,
    hasSuspiciousDomAttributes: false,
    hasNoWindowDimensions: false
  });
  const isHuman = $derived(!Object.values(detectors).some(Boolean));

  $effect(() => {
    const suspiciousDomAttributes = new Set(["selenium", "webdriver", "driver", "playwright"]);
    const documentAttributes = new Set(document.documentElement.getAttributeNames());

    detectors.hasWebDriver = navigator.webdriver;
    detectors.hasHeadlessInUserAgent = navigator.userAgent.toLowerCase().includes("headless");
    detectors.hasNoUserLanguages = navigator.languages.length === 0;
    detectors.hasSuspiciousDomAttributes = suspiciousDomAttributes.intersection(documentAttributes).size > 0;
    detectors.hasNoWindowDimensions = !window.innerWidth || !window.innerHeight;
  });

  const onclick = (event: MouseEvent) => {
    event.preventDefault();
    window.open(href, "_self");
  };
</script>

{#if isHuman}
  <a {...attributes} aria-label={href.split(":")[1]} href="#!" {onclick}></a>
{/if}

<style lang="scss">
  a::after {
    content: attr(aria-label);
  }
</style>
