<script lang="ts">
  import type { Snippet } from "svelte";
  import type { Attachment } from "svelte/attachments";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { on } from "svelte/events";

  interface Props extends HTMLAnchorAttributes {
    children?: Snippet;
    href: `mailto:${string}` | `tel:${string}`;
  }

  const { children, href, ...attributes }: Props = $props();

  const mounted: Attachment<HTMLAnchorElement> = (element) => {
    on(element, "click", (event) => {
      event.preventDefault();
      element.textContent = href.replace(/^(?:mailto:|tel:)/, "");
      element.href = href;
    }, { once: true });
  };
</script>

<a {@attach mounted} {...attributes} href="#!" rel="external">
  {@render children?.()}
</a>
