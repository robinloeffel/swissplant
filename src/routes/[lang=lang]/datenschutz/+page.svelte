<script lang="ts">
  import Hero from "$components/hero.svelte";
  import two from "$img/aerials/2.avif";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: two,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
