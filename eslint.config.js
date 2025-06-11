const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");

module.exports = defineConfig([
  {
    name: "my_configs",
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    plugins: {},
    extends: [js.configs.recommended],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-alert": "error",
    },
  },
]);
