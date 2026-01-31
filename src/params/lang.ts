export const match = (parameter: unknown): parameter is App.Lang => (
  parameter === "de" || parameter === "en"
);
