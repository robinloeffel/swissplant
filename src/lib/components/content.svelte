<script lang="ts">
	interface Properties {
		body: string;
	}

	const { body }: Properties = $props();
</script>

<section class="content">
	{body}
</section>

<style>

</style>
