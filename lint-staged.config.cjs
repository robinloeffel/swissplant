/** @type {import("lint-staged").Config} */
module.exports = {
  "*.{ts,js,cjs,mjs}": "eslint --fix",
  "*.scss": "stylelint --fix"
};
