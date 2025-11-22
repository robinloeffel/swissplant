<script lang="ts">
  import { Content, Hero, Iframe, Richtext, Table } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>

  {#if data.table}
    <Table {...data.table} />
  {/if}

  <Richtext blocks={data.richtext} />

  <Iframe
    allow="fullscreen; picture-in-picture"
    ar={16 / 9}
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/H2mMli5KiKY"
    title="SwissPlant: PlantTape im Einsatz"
  />
</Content>
