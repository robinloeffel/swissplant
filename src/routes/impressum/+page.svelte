<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import one from "$img/aerials/1.avif";
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { PageProps } from "./$types";

  const images: HTMLImgAttributes[] = [
    {
      src: one,
      alt: ""
    }
  ];

  const { data }: PageProps = $props();
</script>

<Hero {images} />
<Content>
  <h1>{data.title}</h1>
</Content>
