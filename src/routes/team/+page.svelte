<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import TeamGrid from "$components/team-grid.svelte";
  import tinu from "$img/photoshoot/tinu.avif";
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { PageProps } from "./$types";

  const images: HTMLImgAttributes[] = [
    {
      src: tinu,
      alt: "SwissPlant from above"
    }
  ];

  const { data }: PageProps = $props();
</script>

<Hero {images} />
<Content>
  <h1>{data.title}</h1>
  <TeamGrid />
</Content>
