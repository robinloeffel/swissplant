import mehrsprachig from "mehrsprachig";

document.addEventListener(
  "mehrsprachigTranslated",
  ({ detail: {
    localeKey: language
  } }) => {
    document.documentElement.lang = language;
  }
);

mehrsprachig({
  fallback: "de",
  sources: {
    de: "/data/de.json",
    en: "/data/en.json"
  }
});
