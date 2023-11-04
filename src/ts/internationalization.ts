import mehrsprachig from "mehrsprachig";

const handleMehrsprachigTranslated = (
  { detail }: CustomEventInit<{ localeKey: string }>
) => {
  document.documentElement.lang = detail?.localeKey ?? "de";
};

document.addEventListener(
  "mehrsprachigTranslated",
  handleMehrsprachigTranslated
);

mehrsprachig({
  fallback: "de",
  sources: {
    de: "/data/de.json",
    en: "/data/en.json"
  }
});
