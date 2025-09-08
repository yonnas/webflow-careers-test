"use client";

import { useState, useEffect } from "react";

interface StickyApplyButtonProps {
  ghSlug: string;
  jobId: string;
  jobTitle: string;
  className?: string;
}

export function StickyApplyButton({
  ghSlug,
  jobId,
  jobTitle,
  className = "",
}: StickyApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300; // Show after scrolling 300px
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("job-application-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 sticky-apply-button ${className}`}
    >
      <button
        onClick={scrollToForm}
        className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        aria-label={`Apply for ${jobTitle}`}
      >
        <span className="mr-2">📝</span>
        Apply Now
      </button>
    </div>
  );
}
