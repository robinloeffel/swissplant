<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import one from "$img/aerials/1.jpg";

  const images: HeroProps["images"] = [
    {
      src: one,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
