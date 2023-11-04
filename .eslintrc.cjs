/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet/typescript",
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
