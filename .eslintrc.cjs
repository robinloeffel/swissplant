const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: "sweet",
  rules: {
    "@stylistic/indent": [ "error", 2 ]
  }
});
