<script lang="ts">
  import { Content, Hero, Richtext } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <Richtext blocks={data.richtext} />
</Content>
