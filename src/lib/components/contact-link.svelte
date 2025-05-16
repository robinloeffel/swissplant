<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    value: `mailto:${string}` | `tel:${string}`;
  }

  const { value, ...attributes }: Props = $props();
  const detectors = $state({
    hasWebDriver: false,
    hasHeadlessInUserAgent: false,
    hasNoUserLanguages: false,
    hasSetSuspiciousDomAttributes: false,
    hasNoWindowDimensions: false
  });
  const isHuman = $derived(!Object.values(detectors).some(Boolean));

  $effect(() => {
    const suspiciousDomAttributes = new Set(["selenium", "webdriver", "driver", "playwright"]);
    const documentAttributes = new Set(document.documentElement.getAttributeNames());

    detectors.hasWebDriver = navigator.webdriver;
    detectors.hasHeadlessInUserAgent = navigator.userAgent.toLowerCase().includes("headless");
    detectors.hasNoUserLanguages = navigator.languages.length === 0;
    detectors.hasSetSuspiciousDomAttributes = suspiciousDomAttributes.intersection(documentAttributes).size > 0;
    detectors.hasNoWindowDimensions = !window.innerWidth || !window.innerHeight;
  });

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    window.open(value, "_self");
  };
</script>

{#if isHuman}
  <a {...attributes} aria-label={value.split(":")[1]} href="#!" onclick={handleClick}></a>
{/if}

<style lang="scss">
  a::after {
    content: attr(aria-label);
  }
</style>
