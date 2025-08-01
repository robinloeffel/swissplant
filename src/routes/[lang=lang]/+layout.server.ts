import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ params, route }) => ({
  lang: params.lang,
  path: route.id.replace("[lang=lang]", params.lang)
});

export const prerender = true;
