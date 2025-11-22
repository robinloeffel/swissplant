export const match = (parameter: string): parameter is App.Lang => (
  parameter === "de" || parameter === "en"
);
