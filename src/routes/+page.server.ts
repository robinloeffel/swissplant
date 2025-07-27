import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ request, url }) => {
  if (url.pathname === "/") {
    const languages = new Set(["de", "en"]);
    const browserLanguages = request.headers.get("accept-language")
      ?.split(",")
      .map(lang => lang.split(";")[0]?.trim())
      .filter(Boolean)
      .map(lang => lang.split("-")[0]?.trim())
      .filter(Boolean);
    const preferredLanguage = browserLanguages?.find(lang => languages.has(lang));

    redirect(307, preferredLanguage ? `/${preferredLanguage}` : "/en");
  }
};
