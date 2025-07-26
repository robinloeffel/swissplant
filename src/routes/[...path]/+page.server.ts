import { config } from "$config";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies, url }) => {
  if (!url.pathname.includes("immutable/") || !url.pathname.includes("assets/")) {
    const language = cookies.get("lang") ?? config.defaultLanguage;
    redirect(307, `/${language}`);
  }
};
