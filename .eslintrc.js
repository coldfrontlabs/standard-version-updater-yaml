module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["standard", "plugin:jsdoc/recommended", "prettier"],
  plugins: ["jsdoc"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  ignorePatterns: ["!.*.js"],
  rules: {},
};
