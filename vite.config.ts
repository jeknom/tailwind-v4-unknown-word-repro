import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { checker } from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['*.test.ts'],
  },
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint .",
        useFlatConfig: true,
      },
    }),
  ],
});
