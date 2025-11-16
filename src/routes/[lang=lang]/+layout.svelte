<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import Footer from "$components/footer.svelte";
  import Navigation from "$components/navigation.svelte";
  import favicon from "$img/favicon.svg";
  import "$styles/base.scss";
  import type { Attachment } from "svelte/attachments";
  import type { LayoutProps } from "./$types";

  const { children, data }: LayoutProps = $props();

  const pageMeta = $derived.by(() => {
    const { lang, path } = data;

    return {
      lang,
      path,
      canonical: `https://swissplant.ch${path}`,
      ...page.data.meta
    };
  });

  const langAttach: Attachment<Document> = ({ documentElement }) => {
    documentElement.lang = pageMeta.lang;
  };
</script>

<svelte:document {@attach langAttach} />

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={pageMeta.description} />
  <meta name="keywords" content={pageMeta.keywords} />
  <link href={pageMeta.canonical} rel="canonical" />
  <title>{pageMeta.title}</title>
  <link href={favicon} rel="icon" />

  {#if !dev}
    <script
      data-website-id="394b5468-7f5b-4078-8102-ed21d4a664e4"
      defer
      fetchpriority="low"
      src="https://cloud.umami.is/script.js"
    ></script>
  {/if}
</svelte:head>

<Navigation lang={pageMeta.lang} path={pageMeta.path} />
<main>{@render children()}</main>
<Footer lang={pageMeta.lang} />
