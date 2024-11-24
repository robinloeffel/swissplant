<script lang="ts">
	import { Hero, SplitTile, type HeroProperties } from "#components";
	import { four, one, three, two } from "$assets/img";

	const hero: HeroProperties = {
		images: [one, two, three, four],
		size: "large"
	};
</script>

<svelte:head>
	<title>SwissPlant GmbH &mdash; Ihr Spezialist für Gemüsejungpflanzen</title>
</svelte:head>

<Hero {...hero} />
<SplitTile />
<SplitTile />
<SplitTile />
<SplitTile />
