// eslint-disable-next-line unicorn/prevent-abbreviations
export const match = (param: string): param is "de" | "en" => (
  param === "de" || param === "en"
);
