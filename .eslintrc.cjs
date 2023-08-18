/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "gulpfile.mjs",
    env: {
      browser: false,
      node: true
    }
  }]
};
