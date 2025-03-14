<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import two from "$img/aerials/2.jpg";

  const images: HeroProps["images"] = [
    {
      src: two,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
