"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    console.log("🎯 ThemeToggle mounted:", {
      savedTheme,
      systemTheme,
      initialTheme,
    });

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-circle" disabled>
        <div className="loading loading-spinner loading-sm"></div>
      </button>
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("🔄 Theme toggle:", { from: theme, to: newTheme });

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // Debug: Check if theme attribute was set correctly
    const actualTheme = document.documentElement.getAttribute("data-theme");
    console.log("✅ Theme attribute set:", actualTheme);

    // Debug: Check computed styles of key elements
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    console.log("🎨 Body computed styles:", {
      backgroundColor: computedStyle.backgroundColor,
      color: computedStyle.color,
      theme: actualTheme,
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap={"round" as const}
            strokeLinejoin={"round" as const}
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap={"round" as const}
            strokeLinejoin={"round" as const}
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}
