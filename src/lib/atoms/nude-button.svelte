<script lang="ts" module>
	import type { HTMLButtonAttributes } from "svelte/elements";

	export interface NudeButtonProperties {
		icon: string;
		label: string;
		attributes?: HTMLButtonAttributes;
		color?: string;
	}
</script>

<script lang="ts">
	import { Icon } from "#atoms";

	const {
		icon,
		label,
		attributes,
		color = ""
	}: NudeButtonProperties = $props();
</script>

<button type="button" {...attributes} class:nude-button={true}>
	<Icon markup={icon} fill={color} />
	<span class="sr-only">{label}</span>
</button>

<style>
	.nude-button {
		cursor: pointer;
		background: 0;
		border: 0;
	}
</style>
