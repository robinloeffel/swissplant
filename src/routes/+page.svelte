<script lang="ts">
	import { Hero, SplitTile, type HeroProperties } from "#components";
	import { one } from "$assets/img";

	const hero: HeroProperties = {
		images: [one],
		size: "large"
	};
</script>

<svelte:head>
	<title>SwissPlant GmbH</title>
</svelte:head>

<Hero {...hero} />
<SplitTile />
<SplitTile />
<SplitTile />
<SplitTile />
