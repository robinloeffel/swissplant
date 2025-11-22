<script lang="ts">
  import { Hero, SplitTile } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<h1 class="sr-only">{data.heading}</h1>
<Hero {...data.hero} />
{#each data.splitTiles as splitTile (splitTile.title)}
  <SplitTile {...splitTile} />
{/each}
