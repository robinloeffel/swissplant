<script lang="ts">
	interface Properties {
		images: string[];
		size?: "small" | "large";
	}

	const { images, size = "small" }: Properties = $props();
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
