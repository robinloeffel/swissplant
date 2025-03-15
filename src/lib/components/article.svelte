<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<article>
  {@render children()}
</article>

<style lang="scss">
  @use "$styles/variables";

  article {
    width: min(90%, 60ch);
    margin: 4rem auto;

    :global {
      > * + * {
        margin-top: 1em;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid variables.$color-black-05;

        tr:nth-child(odd) {
          background-color: variables.$color-black-05;
        }

        td {
          padding: variables.$space-small;
        }

        td:first-child {
          font-weight: bold;
        }
      }

      a {
        color: variables.$color-brand;
      }
    }
  }
</style>
