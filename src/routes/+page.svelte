<script lang="ts">
	import { one } from "$assets/img";
	import { Hero, SplitTile, type HeroProperties } from "$components";

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
