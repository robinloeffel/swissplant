import mehrsprachig from 'mehrsprachig';

document.addEventListener(
  'mehrsprachigTranslated',
  ({ detail: language }) => {
    document.documentElement.lang = language;
  }
);

mehrsprachig({
  standard: 'de',
  sources: {
    de: '/data/de.json',
    en: '/data/en.json'
  }
});
