<script lang="ts">
  interface Props {
    blocks: App.Richtext[];
  }

  const { blocks }: Props = $props();

  const renderBlock = (block: App.Richtext) => {
    let attributes = "";
    const { text, type } = block;

    if (block.attributes) {
      attributes = Object.entries(block.attributes)
        .map(([key, value]) => ` ${key}="${String(value)}"`)
        .join("");
    }

    return `<${type}${attributes}>${text}</${type}>`;
  };
</script>

<div class="richtext">
  {#each blocks as block (block.text)}
    <!-- eslint-disable svelte/no-at-html-tags -->
    {@html renderBlock(block)}
  {/each}
</div>

<style lang="scss">
  :global .richtext:where(:not(:first-child)) > * {
    margin-top: 1em;
  }

  :global .richtext address {
    font-style: normal;
    white-space: pre-line;
  }
</style>
