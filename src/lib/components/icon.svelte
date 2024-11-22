<script lang="ts" module>
	export interface IconProperties {
		markup: string;
		fill?: string;
	}
</script>

<script lang="ts">
	const { markup, fill }: IconProperties = $props();
</script>

<div class="icon" style:--fill={fill}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html markup}
</div>

<style>
	.icon {
		color: var(--fill);
	}
</style>
