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
	import { Icon } from "#components";
	import swissplantLogo from "$assets/svg/swissplant-logo-swooshless.svg?raw";
	import burger from "iconoir/icons/regular/menu.svg?raw";

	const { pages }: NavbarProperties = $props();
	const [barItem, ...expandoItems] = pages;

	let open = $state(false);

	const toggleOpen = () => {
		open = !open;
	};

	const close = () => {
		open = false;
	};
</script>

<nav class="navbar" class:open id="navbar">
	<ul class="navbar-bar">
		<li class="navbar-item">
			<a class="navbar-icon" href="{barItem?.href}" onclick="{close}">
				<Icon markup={swissplantLogo} fill="var(--brand)" />
				<span class="sr-only">{barItem?.name}</span>
			</a>
		</li>
		<li class="navbar-item">
			<button class="navbar-toggle" type="button" onclick="{toggleOpen}">
				<Icon markup={burger} />
				<span class="sr-only">Navigation auf- und zuklappen</span>
			</button>
		</li>
	</ul>
	<div class="navbar-expando">
		<ul class="navbar-list">
			{#each expandoItems as page (page.href)}
				<li class="navbar-item">
					<a class="navbar-link" href="{page.href}" onclick="{close}">
						{page.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		inset: 0 0 auto;
		z-index: 9;
		width: min(100% - 3rem, 480px);
		margin: 1rem auto 0;
		background-color: var(--white-90);
		backdrop-filter: blur(1rem);
		border: 1px solid var(--black-05);
		border-radius: 1rem;
		box-shadow: 0 4px 8px var(--black-05);
	}

	.navbar-bar,
	.navbar-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.navbar-bar {
		padding: 2rem 2.5rem;
	}

	.navbar-expando {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.25s ease-in-out;
		will-change: grid-template-rows;

		.navbar.open & {
			grid-template-rows: 1fr;
		}
	}

	.navbar-list {
		overflow: hidden;
	}

	.navbar-item {
		display: grid;
		font-size: var(--font-size-md);

		.navbar-expando & {
			text-align: center;
			border-top: 1px solid var(--black-05);

			&:nth-child(odd) {
				border-right: 0.5px solid var(--black-05);
			}

			&:nth-child(even) {
				border-left: 0.5px solid var(--black-05);
			}
		}
	}

	.navbar-link {
		color: var(--brand);

		.navbar-expando & {
			padding: 1.5rem;
		}
	}

	.navbar-icon {
		place-self: center start;
		width: 121px;
		height: 32px;
	}

	.navbar-toggle {
		place-self: center end;
		cursor: pointer;
		background: 0;
		border: 0;
		transition: rotate 0.25s ease-in-out;

		.navbar.open & {
			rotate: 0.25turn;
		}
	}
</style>
