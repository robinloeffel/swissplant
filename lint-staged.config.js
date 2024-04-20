/** @type {import("lint-staged").Config} */
export default {
  "*.{ts,js,cjs,mjs,html}": "eslint --fix",
  "*.scss": "stylelint --fix"
};
