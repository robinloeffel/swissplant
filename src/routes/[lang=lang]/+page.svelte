<script lang="ts">
  import Hero from "$components/hero.svelte";
  import SplitTile from "$components/split-tile.svelte";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
{#each data.splitTiles ?? [] as splitTile (splitTile.title)}
  <SplitTile {...splitTile} />
{/each}
