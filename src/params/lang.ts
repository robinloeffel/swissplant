import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (value: unknown): value is "de" | "en" => value === "de" || value === "en";
