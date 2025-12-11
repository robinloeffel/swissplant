<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLAnchorAttributes, MouseEventHandler } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    href: `mailto:${string}` | `tel:${string}`;
  }

  const { href, ...attributes }: Props = $props();
  const label = $derived(href.split(":").at(1));

  let sus = $state.raw(true);

  const onclick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    window.location.href = href;
  };

  onMount(() => {
    sus = navigator.webdriver
      || navigator.userAgent.toLowerCase().includes("headless")
      || navigator.languages.length === 0
      || !window.innerWidth
      || !window.innerHeight;
  });
</script>

{#if !sus}
  <a {...attributes} aria-label={label} href="#contact-link" {onclick}></a>
{/if}

<style lang="scss">
  a::before {
    content: attr(aria-label);
  }
</style>
