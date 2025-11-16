// eslint-disable-next-line unicorn/prevent-abbreviations
export const match = (param: string): param is App.Lang => (
  param === "de" || param === "en"
);
