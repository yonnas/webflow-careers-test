import { extractJobDetailsFromAboutRole } from "./jobDetailsParser";

export interface ParsedContent {
  jobDescription: string;
  aboutRole: string;
  aboutYou: string;
  coreBehaviors: string;
  benefits: string;
  remoteTogether: string;
  stayConnected: string;
  jobDetails: string;
  otherContent: string;
}

export function parseJobContent(htmlContent: string): ParsedContent {
  // First decode HTML entities
  const decodedContent = decodeHtmlEntities(htmlContent);

  // Initialize sections
  const sections: ParsedContent = {
    jobDescription: "",
    aboutRole: "",
    aboutYou: "",
    coreBehaviors: "",
    benefits: "",
    remoteTogether: "",
    stayConnected: "",
    jobDetails: "",
    otherContent: "",
  };

  // Split content by headers to identify sections
  const headerPatterns = [
    { key: "aboutRole", pattern: /<h1[^>]*>.*?About the role.*?<\/h1>/i },
    { key: "aboutYou", pattern: /<h2[^>]*>.*?About you.*?<\/h2>/i },
    {
      key: "coreBehaviors",
      pattern: /<h3[^>]*>.*?Our Core Behaviors.*?<\/h3>/i,
    },
    {
      key: "benefits",
      patterns: [
        /<h3[^>]*>.*?Benefits\s*[&]\s*wellness.*?<\/h3>/i,
        /<h3[^>]*>.*?Benefits\s*&amp;\s*wellness.*?<\/h3>/i,
        /<h3[^>]*>.*?Benefits\s*and\s*wellness.*?<\/h3>/i,
      ],
    },
    {
      key: "remoteTogether",
      pattern: /<h3[^>]*>.*?Remote,\s*together.*?<\/h3>/i,
    },
    { key: "stayConnected", pattern: /<h3[^>]*>.*?Stay\s+connected.*?<\/h3>/i },
  ];

  let currentContent = decodedContent;
  let lastIndex = 0;

  // Extract each section
  headerPatterns.forEach(({ key, pattern, patterns }) => {
    let match = null;

    if (patterns) {
      // Handle multiple patterns for the same section
      for (const p of patterns) {
        match = currentContent.match(p);
        if (match) break;
      }
    } else if (pattern) {
      match = currentContent.match(pattern);
    }

    if (match) {
      const startIndex = match.index!;
      const headerEndIndex = startIndex + match[0].length;

      // Find the next header or end of content
      const nextHeaderMatch = currentContent
        .slice(headerEndIndex)
        .match(/<h[1-3][^>]*>/);
      const endIndex = nextHeaderMatch
        ? headerEndIndex + nextHeaderMatch.index!
        : currentContent.length;

      // Extract the section content (excluding the header)
      const sectionContent = currentContent.slice(headerEndIndex, endIndex);

      // Store the section
      sections[key as keyof ParsedContent] = sectionContent;

      // Remove this section from current content for next iteration
      const fullSectionContent = currentContent.slice(startIndex, endIndex);
      currentContent = currentContent.replace(fullSectionContent, "");
    }
  });

  // Everything before the first header is job description
  const firstHeaderMatch = decodedContent.match(/<h[1-3][^>]*>/);
  if (firstHeaderMatch) {
    sections.jobDescription = decodedContent.slice(0, firstHeaderMatch.index!);
  } else {
    sections.jobDescription = decodedContent;
  }

  // Clean up sections
  Object.keys(sections).forEach((key) => {
    const sectionKey = key as keyof ParsedContent;
    sections[sectionKey] = sections[sectionKey]
      .replace(/^\s+|\s+$/g, "") // Trim whitespace
      .replace(/\n\s*\n\s*\n/g, "\n\n"); // Remove excessive line breaks
  });

  // Extract job details from the aboutRole section (everything before "As a [Job Title], you'll...")
  if (sections.aboutRole) {
    const {
      jobDetails: jobDetailsContent,
      roleDescription: roleDescriptionContent,
    } = extractJobDetailsFromAboutRole(sections.aboutRole);

    // Store job details in a new section
    sections.jobDetails = jobDetailsContent;

    // Keep only the role description in aboutRole
    sections.aboutRole = roleDescriptionContent;
  }

  return sections;
}

function decodeHtmlEntities(html: string): string {
  const entities: Record<string, string> = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
    "&apos;": "'",
  };

  return html.replace(/&[^;]+;/g, (entity) => {
    return entities[entity] || entity;
  });
}

export function getSectionIcon(sectionKey: string): string {
  const icons: Record<string, string> = {
    jobDescription: "📋",
    aboutRole: "🎯",
    aboutYou: "👤",
    coreBehaviors: "🌟",
    benefits: "💎",
    remoteTogether: "🏠",
    stayConnected: "🔗",
    otherContent: "📄",
  };
  return icons[sectionKey] || "📄";
}

export function getSectionColor(sectionKey: string): string {
  const colors: Record<string, string> = {
    jobDescription: "primary",
    aboutRole: "secondary",
    aboutYou: "accent",
    coreBehaviors: "success",
    benefits: "warning",
    remoteTogether: "info",
    stayConnected: "neutral",
    otherContent: "base",
  };
  return colors[sectionKey] || "base";
}

export function getSectionTitle(sectionKey: string): string {
  const titles: Record<string, string> = {
    jobDescription: "Job Description",
    aboutRole: "About the Role",
    aboutYou: "About You",
    coreBehaviors: "Our Core Behaviors",
    benefits: "Benefits & Wellness",
    remoteTogether: "Remote, Together",
    stayConnected: "Stay Connected",
    otherContent: "Additional Information",
  };
  return titles[sectionKey] || sectionKey;
}
