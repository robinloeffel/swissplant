<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import Footer from "$components/footer.svelte";
  import Navigation from "$components/navigation.svelte";
  import { config } from "$config";
  import favicon from "$img/favicon.svg";
  import "$styles/base.scss";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();

  const pageMeta = $derived.by(() => {
    const { title, description, keywords } = page.data;
    const lang = page.params.lang ?? "";
    const path = page.route.id?.replace("[lang=lang]", lang) ?? "";

    return {
      base: `/${lang}/`,
      alternates: Object.fromEntries(
        config.languages
          .filter(language => language !== lang)
          .map(language => [language, page.route.id?.replace("[lang=lang]", language) ?? ""])
      ),
      title:
        typeof title === "string"
          ? `${title} — SwissPlant GmbH`
          : "SwissPlant GmbH — Ihr Spezialist für Gemüsejungpflanzen",
      description:
        typeof description === "string"
          ? description
          : "",
      keywords:
        typeof keywords === "string"
          ? keywords
          : "",
      canonical:
        dev
          ? `http://localhost:5173${path}`
          : `https://swissplant.ch${path}`
    };
  });

  $effect(() => {
    document.documentElement.lang = page.params.lang ?? config.defaultLanguage;
  });
</script>

<svelte:head>
  <base href={pageMeta.base} />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={pageMeta.description} />
  <meta name="keywords" content={pageMeta.keywords} />
  <link href={pageMeta.canonical} rel="canonical" />
  <title>{pageMeta.title}</title>
  <link href={favicon} rel="icon" />

  {#each Object.entries(pageMeta.alternates) as [hreflang, href] (hreflang)}
    <link {href} {hreflang} rel="alternate" />
  {/each}

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
