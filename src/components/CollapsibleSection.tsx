"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface CollapsibleSectionProps {
  title: string;
  content: string;
  icon: string;
  color: string;
  defaultExpanded?: boolean;
  className?: string;
}

export function CollapsibleSection({
  title,
  content,
  icon,
  color,
  defaultExpanded = false,
  className = "",
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    defaultExpanded ? undefined : 0
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, content]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const colorClasses = {
    primary: "border-primary/20 bg-primary/5 hover:bg-primary/10",
    secondary: "border-secondary/20 bg-secondary/5 hover:bg-secondary/10",
    accent: "border-accent/20 bg-accent/5 hover:bg-accent/10",
    neutral: "border-base-300 bg-base-200/50 hover:bg-base-200",
  };

  const buttonColorClasses = {
    primary: "text-primary hover:text-primary-focus",
    secondary: "text-secondary hover:text-secondary-focus",
    accent: "text-accent hover:text-accent-focus",
    neutral: "text-base-content hover:text-base-content/80",
  };

  return (
    <div
      className={`card border-2 transition-all duration-300 card-hover-lift ${
        colorClasses[color as keyof typeof colorClasses]
      } ${className}`}
    >
      <div className="card-body p-4">
        <button
          onClick={toggleExpanded}
          className={`group flex items-center justify-between w-full text-left transition-all duration-200 collapsible-trigger ${
            buttonColorClasses[color as keyof typeof buttonColorClasses]
          }`}
          aria-expanded={isExpanded}
          aria-controls={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl transform hover:scale-110 transition-transform duration-200">
              {icon}
            </span>
            <h3 className="text-lg font-bold relative">
              <span className="relative z-10">{title}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-current to-transparent transition-all duration-300 group-hover:w-full"></div>
            </h3>
          </div>
          <span
            className={`transform transition-transform duration-200 text-xl ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ⌄
          </span>
        </button>

        <div
          id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="overflow-hidden transition-all duration-300 ease-in-out collapsible-content"
          style={{ height: contentHeight }}
        >
          <div ref={contentRef} className="pt-4">
            <div className="prose prose-invert max-w-none">
              <div className="gh-rich">
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
