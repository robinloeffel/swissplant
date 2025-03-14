<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import one from "$img/aerials/1.jpg";
  import two from "$img/aerials/2.jpg";

  const images: HeroProps["images"] = [
    {
      src: one,
      alt: "SwissPlant from above"
    },
    {
      src: two,
      alt: "SwissPlant from above"
    }
  ];
</script>

<main>
  <Hero big={true} {images} />
</main>
