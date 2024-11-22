<script lang="ts" module>
	interface LayoutProperties {
		children: Snippet;
	}
</script>

<script lang="ts">
	import { Footer, Navbar, type NavbarProperties } from "#components";
	import { dev } from "$app/environment";
	import { favicon } from "$assets/img";
	import type { Snippet } from "svelte";

	const { children }: LayoutProperties = $props();

	const navbar: NavbarProperties = {
		pages: [{
			name: "Start",
			href: "/"
		}, {
			name: "Angebot",
			href: "/angebot"
		}, {
			name: "Datenschutz",
			href: "/datenschutz"
		}, {
			name: "Firma",
			href: "/firma"
		}, {
			name: "Impressum",
			href: "/impressum"
		}, {
			name: "Jobs",
			href: "/jobs"
		}, {
			name: "Kontakt",
			href: "/kontakt"
		}, {
			name: "Partner",
			href: "/partner"
		}, {
			name: "Team",
			href: "/team"
		}]
	};
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

<Navbar {...navbar} />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global {
		@import "@fontsource-variable/inter" layer(font);
		@import "$styles/reset" layer(reset);
		@import "$styles/variables" layer(variables);
		@import "$styles/base" layer(base);
		@import "$styles/utils" layer(utils);
	}
</style>
