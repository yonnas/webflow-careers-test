"use client";

import React, { useState, useEffect } from "react";
import type { GreenhouseJob } from "../lib/greenhouse";

interface FeaturedJobsSliderProps {
  jobIds: string; // Comma-separated list of job IDs
  ghSlug?: string;
  className?: string;
  title?: string;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface JobCardProps {
  job: GreenhouseJob;
  ghSlug: string;
}

function JobCard({ job, ghSlug }: JobCardProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const getDepartmentName = () => {
    if (job.departments && job.departments.length > 0) {
      return job.departments[0].name;
    }
    return "General";
  };

  const getLocationName = () => {
    if (job.location && job.location.name) {
      return job.location.name;
    }
    if (job.offices && job.offices.length > 0) {
      return job.offices[0].name;
    }
    return "Remote";
  };

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="card-body p-6">
        {/* Department Badge */}
        <div className="badge badge-primary badge-outline mb-3">
          {getDepartmentName()}
        </div>

        {/* Job Title */}
        <h3 className="card-title text-xl font-bold mb-3 line-clamp-2">
          {job.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-base-content/70">
          <span className="text-sm">📍 {getLocationName()}</span>
        </div>

        {/* Job Description Preview */}
        {job.content && (
          <div className="text-sm text-base-content/80 mb-4 line-clamp-3">
            <div
              dangerouslySetInnerHTML={{
                __html: truncateText(
                  job.content.replace(/<[^>]*>/g, ""), // Strip HTML tags
                  150
                ),
              }}
            />
          </div>
        )}

        {/* Apply Button */}
        <div className="card-actions justify-end mt-auto">
          <a
            href={`/careers/jobs/${ghSlug}/${job.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details →
          </a>
        </div>
      </div>
    </div>
  );
}

export function FeaturedJobsSlider({
  jobIds,
  ghSlug = "webflow",
  className = "",
  title = "Featured Jobs",
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: FeaturedJobsSliderProps) {
  const [jobs, setJobs] = useState<GreenhouseJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Parse job IDs from comma-separated string
  const jobIdArray = jobIds
    .split(",")
    .map((id) => id.trim())
    .filter((id) => id.length > 0);

  // Fetch jobs data
  useEffect(() => {
    const fetchJobs = async () => {
      if (jobIdArray.length === 0) {
        setError("No job IDs provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const jobPromises = jobIdArray.map(async (jobId) => {
          const response = await fetch(
            `/careers/api/questions?ghSlug=${encodeURIComponent(
              ghSlug
            )}&jobId=${encodeURIComponent(jobId)}`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch job ${jobId}`);
          }

          const data = (await response.json()) as { job: GreenhouseJob };
          return data.job;
        });

        const jobResults = await Promise.all(jobPromises);
        const validJobs = jobResults.filter((job) => job !== null);

        setJobs(validJobs);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load featured jobs"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [jobIds, ghSlug]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || jobs.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, jobs.length, autoPlayInterval]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  if (loading) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-4 text-lg">Loading featured jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`alert alert-error ${className}`}>
        <span className="text-2xl">⚠️</span>
        <span>{error}</span>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-xl text-base-content/60">
          No featured jobs found.
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-base-content mb-2">{title}</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {showArrows && jobs.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-primary btn-sm shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Previous job"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-primary btn-sm shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Next job"
            >
              →
            </button>
          </>
        )}

        {/* Job Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="w-full flex-shrink-0 px-4"
                style={{ minHeight: "400px" }}
              >
                <JobCard job={job} ghSlug={ghSlug} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {jobs.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {jobs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-base-300 hover:bg-base-content/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-play Toggle */}
        {autoPlay && jobs.length > 1 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="btn btn-ghost btn-sm"
              aria-label={
                isAutoPlaying ? "Pause auto-play" : "Resume auto-play"
              }
            >
              {isAutoPlaying ? <>⏸️ Pause</> : <>▶️ Play</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
