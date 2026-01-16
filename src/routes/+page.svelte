<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const lang = navigator.language.startsWith("en") ? "en" : "de";
    window.location.replace(`/${lang}`);
  });
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>
