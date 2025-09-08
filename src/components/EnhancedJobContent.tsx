"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface EnhancedJobContentProps {
  content: string;
  className?: string;
}

export function EnhancedJobContent({
  content,
  className = "",
}: EnhancedJobContentProps) {
  // Extract and structure the content
  const structureContent = (htmlContent: string) => {
    // Remove the standard company intro if it exists
    const companyIntro =
      "At Webflow, our mission is to bring development superpowers to everyone";
    let processedContent = htmlContent;

    if (htmlContent.includes(companyIntro)) {
      // Find the end of the intro paragraph
      const introEnd = htmlContent.indexOf(
        "</p>",
        htmlContent.indexOf(companyIntro)
      );
      if (introEnd !== -1) {
        processedContent = htmlContent.substring(introEnd + 4);
      }
    }

    return processedContent;
  };

  const processedContent = structureContent(content);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Company Mission Highlight */}
      {content.includes("At Webflow, our mission") && (
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
          <div className="card-body">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  About Webflow
                </h3>
                <p className="text-base-content/80 leading-relaxed">
                  At Webflow, our mission is to bring development superpowers to
                  everyone. As the pioneer of the Website Experience Platform
                  (WXP), we're redefining how teams Build, Manage, and Optimize
                  for the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <div className="gh-rich">
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
            {processedContent}
          </ReactMarkdown>
        </div>
      </div>

      {/* Enhanced List Styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gh-rich ul {
            list-style: none;
            padding-left: 0;
          }

          .gh-rich ul li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.75rem;
            line-height: 1.6;
          }

          .gh-rich ul li::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: hsl(var(--p));
            font-weight: bold;
          }

          .gh-rich ul li strong {
            color: hsl(var(--bc));
            font-weight: 700;
          }

          .gh-rich p {
            margin-bottom: 1rem;
            line-height: 1.7;
          }

          .gh-rich p:first-of-type {
            font-size: 1.1rem;
            line-height: 1.8;
            color: hsl(var(--bc) / 0.9);
          }
        `,
        }}
      />
    </div>
  );
}
