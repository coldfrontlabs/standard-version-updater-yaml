module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["!.*.js"],
  rules: {},
};
