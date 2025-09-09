import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// Simple test component to verify Storybook is working
const TestComponent = ({ text = "Hello Storybook!" }: { text?: string }) => {
  return (
    <div className="p-8 bg-base-100 text-base-content rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-primary mb-4">{text}</h1>
      <p className="text-base-content/80">
        This is a test component to verify Storybook configuration is working
        properly.
      </p>
      <div className="mt-4 flex gap-2">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
      </div>
    </div>
  );
};

const meta: Meta<typeof TestComponent> = {
  title: "Test/Configuration",
  component: TestComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "Text to display in the component",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello Storybook!",
  },
};

export const CustomText: Story = {
  args: {
    text: "Storybook is working! 🎉",
  },
};
