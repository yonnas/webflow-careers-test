"use client";

import React, { useState } from "react";
import {
  parseJobDetailsFromContent,
  extractJobDetailsFromAboutRole,
  type JobDetails, // Import JobDetails interface
} from "../lib/jobDetailsParser";

// Type declarations for HTML elements
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      thead: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLTableSectionElement>,
        HTMLTableSectionElement
      >;
      tbody: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLTableSectionElement>,
        HTMLTableSectionElement
      >;
      tr: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLTableRowElement>,
        HTMLTableRowElement
      >;
      th: React.DetailedHTMLProps<
        React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
        HTMLTableHeaderCellElement
      >;
      td: React.DetailedHTMLProps<
        React.TdHTMLAttributes<HTMLTableDataCellElement>,
        HTMLTableDataCellElement
      >;
    }
  }
}

interface JobDetailsSidebarProps {
  job: any; // The job object from Greenhouse API
  content: string; // The decoded job content
  className?: string;
}

export function JobDetailsSidebar({
  job,
  content,
  className = "",
}: JobDetailsSidebarProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Extract job details from the About the Role section
  const extractJobDetailsFromContent = (): JobDetails => {
    // Initialize with a default, valid JobDetails structure
    const parsedDetails: JobDetails = {
      compensation: { countries: [] },
    };

    // Find the About the Role section
    const aboutRoleMatch = content.match(
      /<h1[^>]*>.*?About the role.*?<\/h1>/i
    );
    if (!aboutRoleMatch) return parsedDetails; // Return initialized object if no match

    const startIndex = aboutRoleMatch.index! + aboutRoleMatch[0].length;
    const nextHeaderMatch = content.slice(startIndex).match(/<h[1-3][^>]*>/);
    const endIndex = nextHeaderMatch
      ? startIndex + nextHeaderMatch.index!
      : content.length;
    const aboutRoleContent = content.slice(startIndex, endIndex);

    // Extract job details from the content above "As a [Job Title], you'll..."
    const { jobDetails: jobDetailsContent } =
      extractJobDetailsFromAboutRole(aboutRoleContent);

    // Parse the job details content and merge into parsedDetails
    const extractedDetails = parseJobDetailsFromContent(jobDetailsContent);
    Object.assign(parsedDetails, extractedDetails);

    // Add department from job object
    if (job.departments && job.departments.length > 0) {
      parsedDetails.department = job.departments
        .map((d: any) => d.name)
        .join(", ");
    }

    return parsedDetails;
  };

  const jobDetails: JobDetails = extractJobDetailsFromContent(); // Type assertion here
  const updatedAt = job.updated_at
    ? new Date(job.updated_at).toLocaleString()
    : undefined;

  return (
    <div className={`card bg-base-200 sticky top-8 ${className}`}>
      <div className="card-body">
        <h2 className="card-title text-xl mb-4 flex items-center gap-2">
          <span className="text-primary">📋</span>
          Job Details
        </h2>

        <div className="space-y-4">
          {/* Location */}
          {jobDetails.location && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">📍</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Location
                </h4>
                <p className="text-base-content">{jobDetails.location}</p>
              </div>
            </div>
          )}

          {/* Department */}
          {jobDetails.department && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">🏢</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Department
                </h4>
                <p className="text-base-content">{jobDetails.department}</p>
              </div>
            </div>
          )}

          {/* Job Type and Exemption */}
          {(jobDetails.type || jobDetails.exemption) && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">💼</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Type
                </h4>
                <p className="text-base-content">
                  {jobDetails.type}
                  {jobDetails.type && jobDetails.exemption && ", "}
                  {jobDetails.exemption}
                </p>
              </div>
            </div>
          )}

          {/* Compensation */}
          {jobDetails.compensation && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">💰</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide mb-2">
                  Compensation
                  {jobDetails.compensation.generalBoilerplate && (
                    <div
                      className="tooltip tooltip-bottom ml-2"
                      data-tip={jobDetails.compensation.generalBoilerplate}
                    >
                      <span className="cursor-help text-base-content/50">
                        ℹ️
                      </span>
                    </div>
                  )}
                </h4>

                {jobDetails.compensation?.countries &&
                  jobDetails.compensation.countries.length > 0 && (
                    <div className="overflow-x-auto mb-2 w-full">
                      <table className="table table-sm table-zebra w-full">
                        <thead>
                          <tr>
                            <th>Country / Zone</th>
                            <th>Range</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobDetails.compensation.countries.map(
                            (
                              country: JobDetails["compensation"]["countries"][0],
                              countryIndex: number
                            ) => (
                              <React.Fragment key={`country-${countryIndex}`}>
                                <tr>
                                  <td className="font-semibold text-base whitespace-nowrap">
                                    {country.name}
                                    {country.note && (
                                      <div
                                        className="tooltip tooltip-right ml-1"
                                        data-tip={country.note}
                                      >
                                        <span className="cursor-help text-base-content/50">
                                          ⓘ
                                        </span>
                                      </div>
                                    )}
                                  </td>
                                  <td className="font-mono text-sm whitespace-nowrap">
                                    {country.range || ""}
                                  </td>
                                </tr>
                                {country.zones &&
                                  country.zones.map(
                                    (
                                      zone: { name: string; range: string },
                                      zoneIndex: number
                                    ) => (
                                      <tr
                                        key={`zone-${countryIndex}-${zoneIndex}`}
                                      >
                                        <td className="font-mono text-sm pl-4 whitespace-nowrap">
                                          {zone.name}
                                        </td>
                                        <td className="font-mono text-sm whitespace-nowrap">
                                          {zone.range}
                                        </td>
                                      </tr>
                                    )
                                  )}
                              </React.Fragment>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                {jobDetails.compensation.generalBoilerplate && (
                  <p className="text-xs text-base-content/70 italic">
                    {jobDetails.compensation.generalBoilerplate}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Reporting */}
          {jobDetails.reporting && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">👥</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Reports To
                </h4>
                <p className="text-sm text-base-content/80">
                  {jobDetails.reporting}
                </p>
              </div>
            </div>
          )}

          {/* Bonus Program */}
          {jobDetails.bonusProgram && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">🎁</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Bonus Program
                </h4>
                <p className="text-sm text-base-content/80">
                  {jobDetails.bonusProgram}
                </p>
              </div>
            </div>
          )}

          {/* Additional Boilerplate */}
          {jobDetails.additionalBoilerplate && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">📄</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Additional Information
                </h4>
                <p className="text-sm text-base-content/80">
                  {jobDetails.additionalBoilerplate}
                </p>
              </div>
            </div>
          )}

          {/* Requisition ID */}
          {jobDetails.requisitionId && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">🆔</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Requisition ID
                </h4>
                <p className="text-sm text-base-content/80 font-mono">
                  {jobDetails.requisitionId}
                </p>
              </div>
            </div>
          )}

          {/* Last Updated */}
          {updatedAt && (
            <div className="flex items-start gap-3">
              <span className="text-primary text-lg">🕒</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-base-content/70 uppercase tracking-wide">
                  Last Updated
                </h4>
                <p className="text-sm text-base-content/80">{updatedAt}</p>
              </div>
            </div>
          )}

          {/* Apply on Greenhouse Link */}
          {job.absolute_url && (
            <div className="pt-4">
              <a
                href={job.absolute_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
                aria-label="Open application on Greenhouse"
              >
                Apply on Greenhouse ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
