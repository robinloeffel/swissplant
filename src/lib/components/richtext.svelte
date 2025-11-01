<script lang="ts">
  interface Props {
    blocks: App.Richtext[];
  }

  const { blocks }: Props = $props();
</script>

<div class="richtext">
  {#each blocks as block (block.text)}
    <!-- eslint-disable svelte/no-at-html-tags -->
    {@html `<${block.type}>${block.text}</${block.type}>`}
  {/each}
</div>

<style lang="scss">
  :global .richtext:where(:not(:first-child)) > * {
    margin-top: 1em;
  }
</style>
