<script lang="ts">
  import Article from "$components/article.svelte";
  import Hero from "$components/hero.svelte";
  import TeamGrid from "$components/team-grid.svelte";
  import tinu from "$img/photoshoot/tinu.jpg";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: tinu,
      alt: "SwissPlant from above"
    }
  ];
</script>

<main>
  <Hero {images} />

  <Article>
    <h1>Team</h1>
    <TeamGrid />
  </Article>
</main>
