module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "jsdoc"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
