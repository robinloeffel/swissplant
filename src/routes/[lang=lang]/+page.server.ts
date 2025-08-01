import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "SwissPlant GmbH — Ihr Spezialist für Gemüsejungpflanzen"
});

export const entries: EntryGenerator = () => [
  { lang: "de" },
  { lang: "en" }
];
