/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "sweet",
    "sweet/configs/typescript-typed.cjs"
  ],
  rules: {
    indent: [ "error", 2 ],
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
