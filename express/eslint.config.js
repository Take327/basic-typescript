import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // 以前の "eslint:recommended"
  tseslint.configs.recommended, // TypeScript の推奨設定
  prettier, // Prettier のルール適用
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // カスタムルールを追加する場合
      "semi": ["error", "always"], // セミコロンを必須にする
      "quotes": ["error", "double"], // ダブルクォートを強制する
      "@typescript-eslint/no-unused-vars": "warn", // 未使用の変数を警告
      "@typescript-eslint/no-explicit-any": "warn", // any 型の使用を警告
    }
  }
];
