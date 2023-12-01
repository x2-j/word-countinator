module.exports =  {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "tsdoc/syntax": "warn",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-tsdoc"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "src/**/*.test.ts",
    ".eslintrc.js"
  ]
}