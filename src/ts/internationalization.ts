import mehrsprachig from "mehrsprachig";

const liveRegion = document.querySelector<HTMLElement>("[data-live-region]");

const handleMehrsprachigTranslated = (
  { detail }: CustomEventInit<{ localeKey: string }>
) => {
  document.documentElement.lang = detail?.localeKey ?? "de";

  if (liveRegion) {
    switch (detail?.localeKey) {
      case "de": {
        liveRegion.textContent = "Die Sprache der Webseite wurde auf Deutsch geändert.";
        break;
      }
      case "en": {
        liveRegion.textContent = "The language of the page has been changed to English.";
        break;
      }
      default: {
        break;
      }
    }
  }
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
