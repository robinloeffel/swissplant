<script lang="ts">
  import { Content, Hero, StructuredText } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <StructuredText {...data.structuredText} />
</Content>
