"use client";

import React from "react";
import { FeaturedJobsSlider } from "./FeaturedJobsSlider";

/**
 * Example usage of the FeaturedJobsSlider component
 *
 * This component demonstrates how to use the FeaturedJobsSlider with different configurations.
 * Replace the jobIds with actual job IDs from your Greenhouse board.
 */
export function FeaturedJobsExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Basic Usage */}
      <section className="mb-16">
        <FeaturedJobsSlider
          jobIds="123456,789012,345678" // Replace with actual job IDs
          ghSlug="webflow" // Your Greenhouse board slug
          title="Featured Openings"
        />
      </section>

      {/* With Auto-play */}
      <section className="mb-16">
        <FeaturedJobsSlider
          jobIds="123456,789012,345678,901234" // Replace with actual job IDs
          ghSlug="webflow"
          title="Hot Jobs - Auto-playing"
          autoPlay={true}
          autoPlayInterval={4000} // 4 seconds
        />
      </section>

      {/* Without Arrows */}
      <section className="mb-16">
        <FeaturedJobsSlider
          jobIds="123456,789012" // Replace with actual job IDs
          ghSlug="webflow"
          title="Quick Picks"
          showArrows={false}
        />
      </section>

      {/* Custom Styling */}
      <section className="mb-16">
        <FeaturedJobsSlider
          jobIds="123456,789012,345678,901234,567890" // Replace with actual job IDs
          ghSlug="webflow"
          title="Engineering Spotlight"
          className="bg-base-200 p-8 rounded-xl"
          autoPlay={true}
          autoPlayInterval={6000} // 6 seconds
        />
      </section>
    </div>
  );
}

/**
 * Usage Instructions:
 *
 * 1. Replace the jobIds with actual job IDs from your Greenhouse board
 * 2. Update the ghSlug to match your organization's Greenhouse board slug
 * 3. Customize the title and other props as needed
 *
 * Props:
 * - jobIds: Comma-separated string of job IDs (required)
 * - ghSlug: Greenhouse board slug (optional, defaults to "webflow")
 * - className: Additional CSS classes (optional)
 * - title: Slider title (optional, defaults to "Featured Jobs")
 * - showArrows: Show navigation arrows (optional, defaults to true)
 * - autoPlay: Enable auto-play (optional, defaults to false)
 * - autoPlayInterval: Auto-play interval in milliseconds (optional, defaults to 5000)
 *
 * Example:
 * <FeaturedJobsSlider
 *   jobIds="123456,789012,345678"
 *   ghSlug="your-company"
 *   title="Join Our Team"
 *   autoPlay={true}
 *   autoPlayInterval={4000}
 * />
 */
