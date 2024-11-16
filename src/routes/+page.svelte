<script lang="ts">
	import { one } from "$assets/img";
	import { Hero, SplitTile } from "$components";
	import type { ComponentProps } from "svelte";

	const hero: ComponentProps<typeof Hero> = {
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
