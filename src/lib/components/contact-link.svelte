<script lang="ts">
  import type { Attachment } from "svelte/attachments";
  import type { HTMLAnchorAttributes, MouseEventHandler } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    href: `mailto:${string}` | `tel:${string}`;
  }

  const { href, ...attributes }: Props = $props();

  let isHuman = $state.raw(false);

  const onclick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    window.location.href = href;
  };

  const checkIsHuman: Attachment<HTMLSpanElement> = () => {
    const suspiciousDomAttributes = new Set(["selenium", "webdriver", "driver", "playwright"]);
    const documentAttributes = new Set(document.documentElement.getAttributeNames());

    isHuman = [
      navigator.webdriver,
      navigator.userAgent.toLowerCase().includes("headless"),
      navigator.languages.length === 0,
      suspiciousDomAttributes.intersection(documentAttributes).size > 0,
      !window.innerWidth || !window.innerHeight
    ].every(v => !v);
  };
</script>

<span {@attach checkIsHuman}>
  {#if isHuman}
    <a
      {...attributes}
      aria-label={href.split(":")[1]}
      href="#!"
      {onclick}
    ></a>
  {/if}
</span>

<style lang="scss">
  a::after {
    content: attr(aria-label);
  }
</style>
