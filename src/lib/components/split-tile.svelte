<script lang="ts">
  import { type IframeProps, default as Iframe } from "$components/iframe.svelte";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface BaseProps {
    even: boolean;
    title: string;
    description: string;
    cta: {
      label: string;
      url: string;
    };
  }

  interface ImageTileProps extends BaseProps {
    type: "image";
    image: HTMLImgAttributes;
  }

  interface IframeTileProps extends BaseProps {
    type: "iframe";
    iframe: IframeProps;
  }

  export type Props = ImageTileProps | IframeTileProps;

  const { even, title, description, cta, ...variant }: Props = $props();
</script>

<section class="split-tile" class:even>
  {#if variant.type === "iframe"}
    <div class="split-tile-iframe">
      <Iframe {...variant.iframe} />
    </div>
  {/if}

  {#if variant.type === "image"}
    <img {...variant.image} class="split-tile-image" />
  {/if}

  <div class="split-tile-content">
    <h2 class="split-tile-title">{title}</h2>
    <p class="split-tile-description">{description}</p>
    <a class="split-tile-cta" href={cta.url}>
      {cta.label}
    </a>
  </div>
</section>

<style lang="scss">
  @use "$styles/media-queries";

  .split-tile {
    display: grid;
    place-items: center;

    > * {
      min-width: 0;
    }

    @include media-queries.above-tablet {
      grid-template-columns: 1fr 1fr;
    }
  }

  .split-tile-image,
  .split-tile-iframe {
    display: none;

    @include media-queries.above-tablet {
      display: unset;
    }
  }

  .split-tile-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .split-tile-iframe {
    width: 100%;
    height: 100%;

    :global(iframe) {
      border-radius: 0;
    }
  }

  .split-tile-content {
    width: min(100%, 640px + 30%);
    padding: 15%;

    .even > & {
      order: -1;
    }

    > * + * {
      margin-top: 1em;
    }
  }

  .split-tile-cta {
    display: inline-block;
    padding: var(--space-16) var(--space-24);
    color: var(--color-brand);
    text-decoration: none;
    border: 2px solid var(--color-brand);
    border-radius: var(--space-16);
    transition:
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    &:is(:hover, :focus-visible) {
      color: var(--color-white);
      background-color: var(--color-brand);
    }
  }
</style>
