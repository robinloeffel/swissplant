<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import { Footer, Navigation } from "$components";
  import favicon from "$img/favicon.svg";
  import { match as isLang } from "$params/lang";
  import "$styles/base.scss";
  import type { LayoutProps } from "./$types";

  const { children }: LayoutProps = $props();

  const pageMeta = $derived.by(() => {
    const { meta } = page.data;
    const { url } = page;
    const { params } = page;
    const lang = isLang(params.lang) ? params.lang : "de";

    const canonical = `https://swissplant.ch${url.pathname}`;
    const alternates = [
      {
        href: canonical.replace(`/${lang}`, `/de`),
        hreflang: "x-default"
      },
      ...["en", "de"].map(item => ({
        href: canonical.replace(`/${lang}`, `/${item}`),
        hreflang: item
      }))
    ];

    return { ...meta, lang, canonical, alternates };
  });

  $effect.pre(() => {
    document.documentElement.lang = pageMeta.lang;
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={pageMeta.description} />
  <meta name="keywords" content={pageMeta.keywords} />
  <meta name="theme-color" content="#fff" />
  <title>{pageMeta.title}</title>
  <link href={favicon} rel="icon" />

  <link href={pageMeta.canonical} rel="canonical" />
  {#each pageMeta.alternates as { href, hreflang } (hreflang)}
    <link {href} {hreflang} rel="alternate" />
  {/each}

  {#if !dev}
    <script
      data-website-id="394b5468-7f5b-4078-8102-ed21d4a664e4"
      defer
      fetchpriority="low"
      src="https://cloud.umami.is/script.js"
    ></script>
  {/if}
</svelte:head>

<Navigation />
<main>{@render children()}</main>
<Footer />
