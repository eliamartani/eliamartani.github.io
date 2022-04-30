module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-strongly-recommended", "prettier"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/require-default-prop": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
  ignorePatterns: ["env.d.ts", "node_modules/*"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
