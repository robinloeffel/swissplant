<script lang="ts" module>
  import { dev } from "$app/environment";
  import favicon from "$img/favicon.svg";
  import type { Snippet } from "svelte";

  interface Properties {
    children: Snippet;
  }
</script>

<script lang="ts">
  import Footer from "$components/footer.svelte";
  import Navigation from "$components/navigation.svelte";
  import "$styles/base.scss";

  const { children }: Properties = $props();
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="apple-mobile-web-app-title" content="SwissPlant" />
  <title>SwissPlant GmbH</title>
  <link href={favicon} rel="icon" type="image/png" />

  {#if !dev}
    <script
      data-domains="swissplant.ch"
      data-website-id="394b5468-7f5b-4078-8102-ed21d4a664e4"
      defer src="/stats/script.js"
    ></script>
  {/if}
</svelte:head>

<Navigation />
{@render children()}
<Footer />
