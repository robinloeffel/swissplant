<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import Richtext from "$components/richtext.svelte";
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

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <Iframe
    allow="fullscreen; picture-in-picture"
    ar={16 / 9}
    src="https://www.youtube-nocookie.com/embed/M3-n0Gf2f2c"
    title="SwissPlant: Gemüsebau im Berner Seeland"
  />
  <Richtext blocks={data.richtext} />
</Content>
