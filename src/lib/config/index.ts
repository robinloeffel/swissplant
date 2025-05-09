export type Languages = ["de", "en"];
export type Language = Languages[number];

export interface Config {
  languages: Languages;
  defaultLanguage: Language;
}

export const config: Config = {
  languages: ["de", "en"],
  defaultLanguage: "de"
};

export const isLanguage = (value: unknown): value is Language => (
  typeof value === "string" && (value === "de" || value === "en")
);

export const getLanguage = (): Language => (
  isLanguage(navigator.language) ? navigator.language : config.defaultLanguage
);
