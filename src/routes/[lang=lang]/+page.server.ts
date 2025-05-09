import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  description: "Yo whassup"
});

export const entries: EntryGenerator = () => [
  { lang: "de" },
  { lang: "en" }
];
