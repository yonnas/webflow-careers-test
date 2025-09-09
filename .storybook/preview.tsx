import type { Preview } from "@storybook/react-vite";
import React from "react";
import { ThemeWrapper } from "./ThemeWrapper";
import "../src/layouts/globals.css";
import "../devlink/global.css";
import "../devlink/Department.module.css";
import "../devlink/JobsList.module.css";
import "../devlink/Job.module.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#111827",
        },
      ],
    },

    docs: {
      theme: {
        // Customize the Storybook theme
        brandTitle: "Webflow Components",
        brandUrl: "https://webflow.com",
      },
    },
  },

  decorators: [
    (Story, context) => {
      // Set up theme support based on background
      const backgroundValue = context.globals.backgrounds?.value || "#ffffff";
      const theme = backgroundValue === "#111827" ? "dark" : "light";

      return (
        <ThemeWrapper theme={theme}>
          <Story />
        </ThemeWrapper>
      );
    },
  ],
};

export default preview;
