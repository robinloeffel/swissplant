<script lang="ts">
  import Icon from "$components/icon.svelte";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface Props {
    images: HTMLImgAttributes[];
    big?: true;
  }

  const { images, big }: Props = $props();

  let visibleIndex = $state(0);

  $effect(() => {
    let interval: number | undefined;

    if (images.length > 1) {
      interval = setInterval(() => {
        visibleIndex = (visibleIndex + 1) % images.length;
      }, 10_000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
</script>

<header class="hero" class:big>
  {#if big}
    <div class="hero-logo">
      <Icon name="swissplant" />
    </div>
  {/if}

  {#each images as image, index (image.src)}
    <img
      class="hero-image"
      class:visible={index === visibleIndex}
      {...image}
    />
  {/each}
</header>

<style lang="scss">
  @use "$styles/variables";

  .hero {
    display: grid;
    height: min(250px, 25vh);
    border-bottom: 5px solid variables.$color-brand;

    &.big {
      position: relative;
      height: 90vh;

      &::after {
        position: absolute;
        inset: 0;
        content: "";
        background-color: variables.$color-black-50;
      }
    }
  }

  .hero-image {
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease-in-out;

    &.visible {
      opacity: 1;
    }
  }

  .hero-logo {
    z-index: 1;
    grid-area: 1 / 1 / 2 / 2;
    place-self: center;
    width: min(640px, 90%);
    color: variables.$color-white;
  }
</style>
