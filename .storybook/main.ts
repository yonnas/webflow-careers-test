import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // Ensure Vite handles CSS properly
      css: {
        postcss: {
          plugins: [require("@tailwindcss/postcss"), require("autoprefixer")],
        },
      },
      // Exclude webpack config files from Vite processing
      optimizeDeps: {
        exclude: [
          "webpack",
          "webpack-cli",
          "webpack.webflow.js",
          "webpack.webflow.cjs",
        ],
      },
      // Ensure proper module resolution
      resolve: {
        alias: {
          // Map any webpack-specific imports to avoid conflicts
          webpack: false,
        },
      },
      // Define environment variables for Storybook
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    });
  },
};
export default config;
