import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => resolve(event, {
  transformPageChunk: ({ html }) => html.replace("%sveltekit.lang%", event.params.lang ?? "de"),
  preload: ({ type }) => new Set<typeof type>(["css", "js", "font"]).has(type)
});
