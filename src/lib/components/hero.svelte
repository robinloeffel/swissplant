<script lang="ts">
  import Icon from "$components/icon.svelte";

  interface HeroImage {
    src: string;
    alt: string;
    objectPosition?: string;
  }

  export interface Props {
    images: HeroImage[];
    big?: true;
  }

  const { images, big }: Props = $props();
  let visibleIndex = $state(0);

  $effect(() => {
    if (images.length > 1) {
      globalThis.setInterval(() => {
        visibleIndex = (visibleIndex + 1) % images.length;
      }, 10_000);
    }
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
    height: 40vh;

    &.big {
      position: relative;
      height: 80vh;

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
