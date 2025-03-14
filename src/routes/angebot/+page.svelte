<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import crates from "$img/photoshoot/crates.jpg";

  const images: HeroProps["images"] = [
    {
      src: crates,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
