<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import two from "$img/aerials/2.avif";
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { PageProps } from "./$types";

  const images: HTMLImgAttributes[] = [
    {
      src: two,
      alt: ""
    }
  ];

  const { data }: PageProps = $props();
</script>

<Hero {images} />
<Content>
  <h1>{data.title}</h1>
</Content>
