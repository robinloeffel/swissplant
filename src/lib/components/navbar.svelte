<script lang="ts" module>
	interface Page {
		name: string;
		href: string;
	}

	export interface NavbarProperties {
		pages: Page[];
	}
</script>

<script lang="ts">
	const { pages }: NavbarProperties = $props();
</script>

<nav class="navbar">
	<ul class="navbar-list">
		{#each pages as page (page.href)}
			<li class="navbar-item">
				<a class="navbar-link" href="{page.href}">
					{page.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		position: fixed;
		inset: 0 0 auto;
		z-index: 9;
		width: min(100% - 3rem, 480px);
		padding: 1rem 1.5rem;
		margin: 1rem auto 0;
		background-color: rgb(255 255 255 / 75%);
		backdrop-filter: blur(1rem);
		border-radius: 1rem;
	}

	.navbar-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.navbar-item {
		min-width: 0;
	}

	.navbar-link {
		color: unset;
		text-decoration: none;
	}
</style>
