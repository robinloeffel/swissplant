<script lang="ts">
  import Hero from "$components/hero.svelte";
  import one from "$img/aerials/1.avif";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: one,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />
</main>
