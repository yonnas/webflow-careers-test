import type { Meta, StoryObj } from "@storybook/react";
import { FeaturedJobsSlider } from "./FeaturedJobsSlider";

// Mock data for stories
const mockJobs = [
  {
    id: 123456,
    title: "Senior Frontend Developer",
    content:
      "<p>We are looking for a talented Senior Frontend Developer to join our team. You will be responsible for building amazing user experiences using React, TypeScript, and modern web technologies.</p>",
    location: { name: "San Francisco, CA" },
    departments: [{ id: 1, name: "Engineering" }],
    offices: [{ id: 1, name: "San Francisco", location: "CA" }],
  },
  {
    id: 789012,
    title: "Product Manager",
    content:
      "<p>Join our product team as a Product Manager and help shape the future of our platform. You will work closely with engineering, design, and business teams to deliver exceptional products.</p>",
    location: { name: "New York, NY" },
    departments: [{ id: 2, name: "Product" }],
    offices: [{ id: 2, name: "New York", location: "NY" }],
  },
  {
    id: 345678,
    title: "UX Designer",
    content:
      "<p>We are seeking a creative UX Designer to join our design team. You will be responsible for creating intuitive and beautiful user experiences that delight our customers.</p>",
    location: { name: "Remote" },
    departments: [{ id: 3, name: "Design" }],
    offices: [{ id: 3, name: "Remote", location: "Global" }],
  },
  {
    id: 456789,
    title: "Senior Solutions Architect, EMEA",
    content:
      "<p>We are looking for a Senior Solutions Architect to join our EMEA team. You will work with enterprise clients to design and implement scalable solutions.</p>",
    location: { name: "Germany & Central Europe" },
    departments: [{ id: 4, name: "Sales" }],
    offices: [{ id: 4, name: "Berlin", location: "Germany" }],
  },
  {
    id: 567890,
    title: "Senior Manager, Enterprise Sales",
    content:
      "<p>Join our enterprise sales team as a Senior Manager. You will lead a team of sales professionals and drive revenue growth with large enterprise clients.</p>",
    location: { name: "U.S. Remote" },
    departments: [{ id: 4, name: "Sales" }],
    offices: [{ id: 5, name: "Remote", location: "U.S." }],
  },
  {
    id: 678901,
    title: "Sales Development Representative",
    content:
      "<p>We are seeking a Sales Development Representative to join our growing sales team. You will be responsible for prospecting and qualifying leads.</p>",
    location: { name: "San Francisco, CA" },
    departments: [{ id: 4, name: "Sales" }],
    offices: [{ id: 1, name: "San Francisco", location: "CA" }],
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
        departments: [
          {
            id: 1,
            name: "Engineering",
            jobs: [mockJobs[0]],
          },
          {
            id: 2,
            name: "Product",
            jobs: [mockJobs[1]],
          },
          {
            id: 3,
            name: "Design",
            jobs: [mockJobs[2]],
          },
          {
            id: 4,
            name: "Sales",
            jobs: [mockJobs[3], mockJobs[4], mockJobs[5]],
          },
        ],
      }),
    } as Response;
  }
  return originalFetch(input);
};

const meta: Meta<typeof FeaturedJobsSlider> = {
  title: "Webflow Components/FeaturedJobsSlider",
  component: FeaturedJobsSlider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A smooth news ticker component that displays featured jobs from Greenhouse in dark-themed cards. Creates a continuous, seamless scrolling effect like a news ticker. Each card features a department badge, job title, location, and a clickable arrow icon. Fetches all jobs and filters by provided job IDs.",
      },
    },
  },
  argTypes: {
    jobIds: {
      control: "text",
      description: "Comma-separated list of job IDs to display",
    },
    ghSlug: {
      control: "text",
      description: "Greenhouse organization slug",
    },
    domain: {
      control: "text",
      description: "Domain for API calls",
    },
    autoPlayInterval: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Auto-play interval in milliseconds for smooth scrolling",
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
    jobIds: "123456,789012,345678,456789,567890,678901",
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const FastScroll: Story = {
  args: {
    jobIds: "123456,789012,345678,456789,567890,678901",
    ghSlug: "webflow",
    autoPlayInterval: 3000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const SlowScroll: Story = {
  args: {
    jobIds: "123456,789012,345678,456789,567890,678901",
    ghSlug: "webflow",
    autoPlayInterval: 8000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const SingleJob: Story = {
  args: {
    jobIds: "123456",
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const ThreeJobs: Story = {
  args: {
    jobIds: "123456,789012,345678",
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const Loading: Story = {
  args: {
    jobIds: "999999,888888,777777", // Non-existent IDs to trigger loading state
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const Error: Story = {
  args: {
    jobIds: "", // Empty job IDs to trigger error state
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const FourJobs: Story = {
  args: {
    jobIds: "123456,789012,345678,456789",
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};

export const SalesJobs: Story = {
  args: {
    jobIds: "456789,567890,678901",
    ghSlug: "webflow",
    autoPlayInterval: 5000,
    domain: "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
  },
};
