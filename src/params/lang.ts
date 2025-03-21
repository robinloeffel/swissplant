import { isLanguage } from "$config";
import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = isLanguage;
