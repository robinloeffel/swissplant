import type { PageServerLoad } from "./$types";

const translations = {} satisfies App.Translations;

export const load: PageServerLoad<App.ContentPageData> = ({ params }) => translations[params.lang];
