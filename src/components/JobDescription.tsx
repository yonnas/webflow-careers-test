"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import {
  parseJobContent,
  getSectionIcon,
  getSectionColor,
  getSectionTitle,
} from "../lib/contentParser";
import { CollapsibleSection } from "./CollapsibleSection";
import { EnhancedJobContent } from "./EnhancedJobContent";

interface JobDescriptionProps {
  content: string;
  className?: string;
}

export function JobDescription({
  content,
  className = "",
}: JobDescriptionProps) {
  const parsedContent = parseJobContent(content);

  // Define which sections should be collapsible vs always visible
  const alwaysVisibleSections = ["jobDescription", "aboutRole", "aboutYou"];
  const collapsibleSections = [
    "coreBehaviors",
    "benefits",
    "remoteTogether",
    "stayConnected",
  ];

  // Check if we have any collapsible content
  const hasCollapsibleContent = collapsibleSections.some(
    (section) =>
      parsedContent[section as keyof typeof parsedContent] &&
      parsedContent[section as keyof typeof parsedContent].trim().length > 0
  );

  return (
    <div className={`space-y-8 job-description-section pb-8 ${className}`}>
      {/* Job Description Section */}
      {parsedContent.jobDescription &&
        parsedContent.jobDescription.trim().length > 0 && (
          <div className="bg-white rounded-xl border border-base-300 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-base-content">
              Job Description
            </h2>
            <EnhancedJobContent content={parsedContent.jobDescription} />
          </div>
        )}

      {/* About the Role Section */}
      {parsedContent.aboutRole && parsedContent.aboutRole.trim().length > 0 && (
        <div className="bg-white rounded-xl border border-base-300 p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-base-content">
            About the Role
          </h2>
          <EnhancedJobContent content={parsedContent.aboutRole} />
        </div>
      )}

      {/* About You Section */}
      {parsedContent.aboutYou && parsedContent.aboutYou.trim().length > 0 && (
        <div className="bg-white rounded-xl border border-base-300 p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-base-content">
            About You
          </h2>
          <EnhancedJobContent content={parsedContent.aboutYou} />
        </div>
      )}

      {/* Collapsible Company Information Sections */}
      {hasCollapsibleContent && (
        <div className="space-y-4">
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Company Information
            </h3>
            <p className="text-base-content/60 text-sm">
              Learn more about our culture, benefits, and work environment
            </p>
          </div>

          <div className="grid gap-4">
            {collapsibleSections.map((sectionKey) => {
              const section = sectionKey as keyof typeof parsedContent;
              const sectionContent = parsedContent[section];

              if (!sectionContent || sectionContent.trim().length === 0)
                return null;

              return (
                <CollapsibleSection
                  key={sectionKey}
                  title={getSectionTitle(sectionKey)}
                  content={sectionContent}
                  icon={getSectionIcon(sectionKey)}
                  color={getSectionColor(sectionKey)}
                  defaultExpanded={false}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Fallback: If no sections were parsed, show original content */}
      {!hasCollapsibleContent &&
        !alwaysVisibleSections.some(
          (section) =>
            parsedContent[section as keyof typeof parsedContent] &&
            parsedContent[section as keyof typeof parsedContent].trim().length >
              0
        ) && (
          <div className="bg-white rounded-xl border border-base-300 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-base-content">
              Job Description
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="gh-rich">
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
