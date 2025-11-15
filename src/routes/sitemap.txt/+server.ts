import { type RequestHandler, text } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const base = "https://swissplant.ch";
  const langs = ["de", "en"];
  const pages = Object.keys(
    import.meta.glob("../**/+page.svelte", { eager: true })
  ).map(path => path
    .replace("..", "")
    .replace("/+page.svelte", "")
  );

  const sitemap = new Set<string>();
  for (const lang of langs) {
    for (const page of pages) {
      const path = page.replace("/[lang=lang]", lang);
      sitemap.add(`${base}/${path}`);
    }
  }

  return text(`${[...sitemap].join("\n")}\n`);
};

export const prerender = true;
