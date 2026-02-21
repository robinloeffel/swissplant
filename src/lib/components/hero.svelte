<script lang="ts">
  import { Icon } from "$components";
  import type { Attachment } from "svelte/attachments";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface Props {
    images: HTMLImgAttributes[];
    big?: true;
  }

  const { images, big }: Props = $props();

  let visibleIndex = $state.raw(0);

  const startSlider: Attachment = () => {
    let interval: number | undefined;

    if (images.length > 1) {
      interval = setInterval(() => {
        visibleIndex = (visibleIndex + 1) % images.length;
      }, 10_000);
    }

    return () => {
      clearInterval(interval);
    };
  };
</script>

<header class={["hero", { big }]} {@attach startSlider}>
  {#if big}
    <div class="hero-logo">
      <Icon name="swissplant" />
    </div>
  {/if}

  {#each images as image, index (image.src)}
    <img
      class={["hero-image", { visible: index === visibleIndex }]}
      fetchpriority={index === 0 ? "high" : "low"}
      loading={index > 0 ? "lazy" : null}
      {...image}
    />
  {/each}
</header>

<style lang="scss">
  .hero {
    display: grid;
    grid-template-areas: "all";
    place-items: center;
    height: min(250px, 25vh);
    contain: strict;
    border-bottom: 5px solid var(--color-brand);

    &.big {
      position: relative;
      height: 90vh;
    }
  }

  .hero-image {
    grid-area: all;
    width: 100%;
    min-width: 0;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease-in-out;

    &.visible {
      opacity: 1;
    }

    .hero.big & {
      filter: brightness(0.5);
    }
  }

  .hero-logo {
    z-index: 1;
    grid-area: all;
    width: min(640px, 90%);
    color: var(--color-white);
    filter: drop-shadow(0 8px 16px var(--color-black-50));
  }
</style>
