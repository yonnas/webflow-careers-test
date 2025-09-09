import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  css: {
    postcss: {
      plugins: [require("@tailwindcss/postcss"), require("autoprefixer")],
    },
  },
  // Ensure Storybook doesn't interfere with webpack configs
  optimizeDeps: {
    exclude: [
      "webpack",
      "webpack-cli",
      "webpack.webflow.js",
      "webpack.webflow.cjs",
    ],
  },
  // Define environment variables
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
  // Exclude webpack files from processing
  build: {
    rollupOptions: {
      external: [
        "webpack",
        "webpack-cli",
        "webpack.webflow.js",
        "webpack.webflow.cjs",
      ],
    },
  },
});
