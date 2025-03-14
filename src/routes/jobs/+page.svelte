<script lang="ts">
  import Hero, { type Props as HeroProps } from "$components/hero.svelte";
  import machine from "$img/photoshoot/machine.jpg";

  const images: HeroProps["images"] = [
    {
      src: machine,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
