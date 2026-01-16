import { type RequestHandler, text } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
  const base = "https://swissplant.ch";
  const langs = new Set<App.Lang>(["de", "en"]);
  const pages = Object.keys(
    import.meta.glob("../[lang=lang]/**/+page.svelte", {
      eager: true
    })
  ).map(path => path
    .replace("../[lang=lang]", "")
    .replace("/+page.svelte", "")
  );

  const sitemap = new Set<string>();
  for (const lang of langs) {
    for (const page of pages) {
      sitemap.add(`${base}/${lang}${page}`);
    }
  }

  return text(`${[...sitemap].join("\n")}\n`);
};

export const prerender = true;
