<script lang="ts">
  import Iframe from "$components/iframe.svelte";
  import type { HTMLIframeAttributes, HTMLImgAttributes } from "svelte/elements";

  interface BaseProps {
    even: boolean;
    title: string;
    description: string;
    cta: {
      label: string;
      url: string;
    };
  }

  interface ImageProps extends BaseProps {
    type: "image";
    image: HTMLImgAttributes;
  }

  interface IframeProps extends BaseProps {
    type: "iframe";
    iframe: HTMLIframeAttributes;
  }

  export type Props = ImageProps | IframeProps;

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
  @use "$styles/variables";

  .split-tile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    > * {
      min-width: 0;
    }
  }

  .split-tile-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  .split-tile-iframe {
    width: 100%;
    height: 100%;
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
    padding: 16px 24px;
    font-size: 90%;
    color: variables.$color-brand;
    text-decoration: none;
    border: 2px solid variables.$color-brand;
    transition:
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    &:is(:hover, :focus-visible) {
      color: variables.$color-white;
      background-color: variables.$color-brand;
    }
  }
</style>
