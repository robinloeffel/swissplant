<script lang="ts" module>
  import agriplantBare from "$svg/agriplant-bare.svg?raw";
  import agriplant from "$svg/agriplant.svg?raw";
  import swissplantBare from "$svg/swissplant-bare.svg?raw";
  import swissplant from "$svg/swissplant.svg?raw";
  import document from "feather-icons/dist/icons/file-text.svg?raw";
  import menu from "feather-icons/dist/icons/menu.svg?raw";
  import x from "feather-icons/dist/icons/x.svg?raw";

  const svgMap = {
    "swissplant-bare": swissplantBare,
    "agriplant-bare": agriplantBare,
    swissplant,
    agriplant,
    menu,
    x,
    document
  } as const;

  interface Props {
    name: keyof typeof svgMap;
    size?: "flex" | "small";
  }
</script>

<script lang="ts">
  const { name, size = "flex" }: Props = $props();
</script>

<div class="icon {size}" aria-hidden="true">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html svgMap[name]}
</div>

<style lang="scss">
  .icon {
    display: inline-grid;
    place-items: center;

    &.small {
      width: var(--space-24);
      height: var(--space-24);
    }

    &.flex {
      width: 100%;
      height: 100%;
    }

    &.link {
      width: 0.8em;
      height: 0.8em;
    }
  }
</style>
