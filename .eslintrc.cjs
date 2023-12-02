/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "gulpfile.mjs",
    env: {
      browser: false,
      node: true
    }
  }, {
    files: "*.html",
    parser: "@html-eslint/parser",
    plugins: [ "@html-eslint" ],
    extends: "plugin:@html-eslint/recommended",
    rules: {
      "@html-eslint/no-inline-styles": "error",
      "@html-eslint/no-script-style-type": "error",
      "@html-eslint/no-target-blank": "error",
      "@html-eslint/require-button-type": "error",
      "@html-eslint/require-meta-charset": "error",
      "@html-eslint/require-meta-description": "error",
      "@html-eslint/no-abstract-roles": "error",
      "@html-eslint/no-accesskey-attrs": "error",
      "@html-eslint/no-aria-hidden-body": "error",
      "@html-eslint/no-non-scalable-viewport": "error",
      "@html-eslint/no-positive-tabindex": "error",
      "@html-eslint/no-skip-heading-levels": "error",
      "@html-eslint/require-frame-title": "error",
      "@html-eslint/require-meta-viewport": "error",
      "@html-eslint/lowercase": "error",
      "@html-eslint/no-multiple-empty-lines": "error",
      "@html-eslint/no-trailing-spaces": "error",
      "@html-eslint/indent": [ "error", 2 ]
    }
  }]
};
