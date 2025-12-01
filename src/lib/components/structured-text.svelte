<script lang="ts">
  import { render } from "datocms-structured-text-to-html-string";

  interface Props {
    document: Exclude<Parameters<typeof render>[0], null | undefined>;
    options?: Parameters<typeof render>[1];
  }

  const { document, options }: Props = $props();
</script>

<section class="structured-text">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html render(document, options)}
</section>

<style lang="scss">
  :global .structured-text > * {
    margin-top: 1em;
  }
</style>
