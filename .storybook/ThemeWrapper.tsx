import React, { useEffect } from "react";

interface ThemeWrapperProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  children,
  theme = "light",
}) => {
  useEffect(() => {
    // Set theme attribute on document element
    document.documentElement.setAttribute("data-theme", theme);

    // Also set color-scheme for proper theme inheritance
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">{children}</div>
  );
};
