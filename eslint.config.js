// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";

//export default defineConfig([
//  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
//]);

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
// import { Linter } from 'eslint'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{js,ts,tsx}"],
  },
  {
    ignores: ["dist/"],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]; // satisfies Linter.Config[]
