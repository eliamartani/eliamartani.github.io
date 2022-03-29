import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";

// doc: https://vitejs.dev/config/
export default defineConfig({
  base: "./",

  plugins: [eslintPlugin(), vue()],
});
