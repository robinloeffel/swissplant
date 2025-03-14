<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import tinu from "$img/photoshoot/tinu.jpg";

  const images: HeroProps["images"] = [
    {
      src: tinu,
      alt: "SwissPlant from above"
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
