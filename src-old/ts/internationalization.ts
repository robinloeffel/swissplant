import mehrsprachig from "mehrsprachig";

interface MehrsprachigEventPayload {
  localeKey: "de" | "en";
}

type MehrsprachigEvent = CustomEventInit<MehrsprachigEventPayload>;

const liveRegion = document.querySelector<HTMLElement>("[data-live-region]");

const handleMehrsprachigTranslated = ({ detail }: MehrsprachigEvent) => {
  if (detail?.localeKey && liveRegion) {
    document.documentElement.lang = detail.localeKey;

    if (detail.localeKey === "de") {
      liveRegion.textContent = "Die Sprache der Webseite wurde auf Deutsch geändert.";
    }

    if (detail.localeKey === "en") {
      liveRegion.textContent = "The language of the page has been changed to English.";
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
