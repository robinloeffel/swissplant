/** @type {import("lint-staged").Config} */
module.exports = {
  "*.{ts,js,cjs,mjs,html}": "eslint --fix",
  "*.scss": "stylelint --fix"
};
