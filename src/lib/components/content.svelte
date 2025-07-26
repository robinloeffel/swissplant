<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<section class="content">
  {@render children()}
</section>

<style lang="scss">
  .content {
    width: min(calc(100% - var(--space-64)), 64ch);
    margin: var(--space-64) auto;

    :global {
      > * + * {
        margin-top: 1em;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid var(--color-black-05);

        tr:nth-child(odd) {
          background-color: var(--color-black-05);
        }

        td {
          padding: var(--space-8);

          &:first-child {
            font-weight: bold;
            hyphens: auto;
          }
        }
      }

      a {
        color: var(--color-brand);
      }

      iframe {
        width: calc(100% + var(--space-32));
        margin-inline: calc(var(--space-16) * -1);
      }
    }
  }
</style>
