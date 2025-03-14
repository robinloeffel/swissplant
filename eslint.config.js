import sweet from "eslint-config-sweet";
import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";

export default ts.config(
  ...sweet,
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.ts"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    },
    rules: {
      "unicorn/prevent-abbreviations": [
        "error", {
          allowList: {
            Ref: true,
            Props: true
          }
        }
      ],
      "@typescript-eslint/init-declarations": "off",

      "svelte/no-target-blank": "error",
      "svelte/button-has-type": "error",
      "svelte/prefer-const": "error",
      "svelte/block-lang": [
        "error",
        {
          script: "ts",
          style: "scss"
        }
      ],
      "svelte/indent": "error",
      "svelte/first-attribute-linebreak": "error",
      "svelte/html-closing-bracket-new-line": "error",
      "svelte/html-closing-bracket-spacing": "error",
      "svelte/html-quotes": "error",
      "svelte/html-self-closing": "error",
      "svelte/mustache-spacing": "error",
      "svelte/no-extra-reactive-curlies": "error",
      "svelte/no-spaces-around-equal-signs-in-attribute": "error",
      "svelte/prefer-class-directive": "error",
      "svelte/prefer-style-directive": "error",
      "svelte/shorthand-attribute": "error",
      "svelte/shorthand-directive": "error",
      "svelte/sort-attributes": "error",
      "svelte/spaced-html-comment": "error"
    }
  }
);
