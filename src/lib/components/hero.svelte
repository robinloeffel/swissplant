<script lang="ts" module>
	export interface HeroProperties {
		images: string[];
		size?: "small" | "large";
	}
</script>

<script lang="ts">
	const { images, size = "small" }: HeroProperties = $props();
</script>

<header class="hero {size}">
	<ul class="hero-images-list">
		<li class="hero-images-item">
			{#each images as image}
				<img src="{image}" alt="" class="hero-image" />
			{/each}
		</li>
	</ul>
</header>
