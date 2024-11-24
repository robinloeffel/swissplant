<script lang="ts" module>
	export interface HeroProperties {
		images: string[];
		size?: "small" | "large";
	}
</script>

<script lang="ts">
	import { Icon, NudeButton } from "#atoms";
	import swissplantLogo from "$assets/svg/swissplant-logo.svg?raw";
	import arrowDown from "iconoir/icons/regular/arrow-down.svg?raw";

	const { images, size = "small" }: HeroProperties = $props();
	let visibleIndex = $state(0);

	$effect(() => {
		const timeout = globalThis.setInterval(() => {
			visibleIndex = (visibleIndex + 1) % images.length;
		}, 10_000);

		return () => {
			globalThis.clearInterval(timeout);
		};
	});
</script>

<header class="hero {size}">
	<ul class="hero-images-list">
		{#each images as image, index (image)}
			<li class="hero-images-item" class:visible={index === visibleIndex}>
				<img src="{image}" alt="" class="hero-image" />
			</li>
		{/each}
	</ul>
	{#if size === "large"}
		<div class="hero-content">
			<div class="hero-logo">
				<Icon markup={swissplantLogo} fill="var(--white)" />
			</div>
			<div class="hero-button">
				<NudeButton
					label="Zum Hauptinhalt springen"
					icon={arrowDown}
					color="var(--white)"
				/>
			</div>
		</div>
	{/if}
</header>

<style>
	.hero {
		position: relative;
		display: grid;
		place-items: center;
		border-bottom: 0.25rem solid var(--brand);
	}

	.hero-images-list {
		display: grid;
		filter: brightness(50%);
	}

	.hero-images-item {
		grid-area: 1 / 1;
		width: 100%;
		height: calc(100svh - 0.25rem);
		opacity: 0;
		transition: opacity 2.5s ease-in-out;

		&.visible {
			opacity: 1;
		}
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-content {
		position: absolute;
		display: grid;
		gap: 1rem;
		place-items: center;
		width: min(75%, 720px);
	}

	.hero-logo {
		width: 100%;
	}
</style>
