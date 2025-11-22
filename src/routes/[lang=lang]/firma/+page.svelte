<script lang="ts">
  import { Content, Hero, Iframe, Richtext } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <Iframe
    allow="fullscreen; picture-in-picture"
    ar={16 / 9}
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/M3-n0Gf2f2c"
    title="SwissPlant: Gemüsebau im Berner Seeland"
  />
  <Richtext blocks={data.richtext} />
</Content>
