import type { Meta, StoryObj } from "@storybook/react";
import { JobsPage } from "./JobsPage";

// Mock data for stories
const mockDepartments = [
  {
    id: 1,
    name: "Engineering",
    jobs: [
      {
        id: 123456,
        title: "Senior Frontend Developer",
        location: { name: "San Francisco, CA" },
        absolute_url: "/jobs/123456",
      },
      {
        id: 123457,
        title: "Backend Engineer",
        location: { name: "Remote" },
        absolute_url: "/jobs/123457",
      },
      {
        id: 123458,
        title: "DevOps Engineer",
        location: { name: "New York, NY" },
        absolute_url: "/jobs/123458",
      },
    ],
  },
  {
    id: 2,
    name: "Product",
    jobs: [
      {
        id: 789012,
        title: "Product Manager",
        location: { name: "San Francisco, CA" },
        absolute_url: "/jobs/789012",
      },
      {
        id: 789013,
        title: "Product Designer",
        location: { name: "Remote" },
        absolute_url: "/jobs/789013",
      },
    ],
  },
  {
    id: 3,
    name: "Design",
    jobs: [
      {
        id: 345678,
        title: "UX Designer",
        location: { name: "Remote" },
        absolute_url: "/jobs/345678",
      },
    ],
  },
  {
    id: 4,
    name: "Marketing",
    jobs: [
      {
        id: 456789,
        title: "Marketing Manager",
        location: { name: "New York, NY" },
        absolute_url: "/jobs/456789",
      },
      {
        id: 456790,
        title: "Content Writer",
        location: { name: "Remote" },
        absolute_url: "/jobs/456790",
      },
    ],
  },
];

// Mock fetch for stories
const originalFetch = window.fetch;
window.fetch = async (input: RequestInfo | URL) => {
  const url = input.toString();
  if (url.includes("/api/greenhouse")) {
    return {
      ok: true,
      json: async () => ({
        departments: mockDepartments,
      }),
    } as Response;
  }
  return originalFetch(input);
};

const meta: Meta<typeof JobsPage> = {
  title: "Webflow Components/JobsPage",
  component: JobsPage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A comprehensive job listings page that displays all jobs organized by department with filtering capabilities.",
      },
    },
  },
  argTypes: {
    ghSlug: {
      control: "text",
      description: "Greenhouse organization slug",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ghSlug: "webflow",
  },
};

export const CustomSlug: Story = {
  args: {
    ghSlug: "custom-company",
  },
};

export const WithCustomClass: Story = {
  args: {
    ghSlug: "webflow",
    className: "max-w-6xl mx-auto",
  },
};

export const Loading: Story = {
  args: {
    ghSlug: "loading-test",
  },
  parameters: {
    // Override fetch to simulate loading
    mockData: {
      delay: 2000,
    },
  },
};

export const Error: Story = {
  args: {
    ghSlug: "error-test",
  },
  parameters: {
    // Override fetch to simulate error
    mockData: {
      shouldError: true,
    },
  },
};

export const Empty: Story = {
  args: {
    ghSlug: "empty-test",
  },
  parameters: {
    // Override fetch to return empty departments
    mockData: {
      departments: [],
    },
  },
};
