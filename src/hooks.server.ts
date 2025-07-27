import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { lang } = event.params;

  if (lang) {
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace("%sveltekit.lang%", lang)
    });
  }

  return resolve(event);
};
