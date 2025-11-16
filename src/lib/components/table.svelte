<script lang="ts">
  import type { HTMLTableAttributes } from "svelte/elements";

  export interface TableProps extends HTMLTableAttributes {
    rows: string[][];
  }

  const { rows, ...attributes }: TableProps = $props();
</script>

<table {...attributes}>
  <tbody>
    {#each rows as row (row)}
      <tr>
        {#each row as cell (cell)}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
