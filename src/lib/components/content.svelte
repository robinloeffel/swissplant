<script lang="ts" module>
	export interface ContentProperties {
		body: string;
	}
</script>

<script lang="ts">
	const { body }: ContentProperties = $props();
</script>

<section class="content">
	{body}
</section>
