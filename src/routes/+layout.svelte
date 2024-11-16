<script lang="ts">
	import { dev } from "$app/environment";
	import { favicon } from "$assets/img";
	import { Footer, Navbar } from "$components";
	import type { Snippet } from "svelte";

	interface LayoutProperties {
		children: Snippet;
	}

	const { children }: LayoutProperties = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link rel="icon" href="{favicon}" />
	<link rel="canonical" href="">

	{#if !dev}
		<script
			async
			data-domains="swissplant.ch"
			data-website-id="394b5468-7f5b-4078-8102-ed21d4a664e4"
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global {
		@import url("@fontsource-variable/inter") layer(font);
		@import url("$styles/reset") layer(reset);
		@import url("$styles/base") layer(base);
	}
</style>
