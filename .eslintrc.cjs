/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "sweet",
    "sweet/configs/typescript-typed.cjs"
  ],
  rules: {
    "no-extra-parens": "off"
  },
  overrides: [{
    files: "gulpfile.mjs",
    env: {
      browser: false,
      node: true
    }
  }]
};
