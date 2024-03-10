module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["env.d.ts", "node_modules/*"],
};
