import * as cheerio from "cheerio";

export interface JobDetails {
  location?: string;
  type?: string;
  compensation: {
    // Make compensation a required property
    generalBoilerplate?: string; // General boilerplate, not nested under zones
    countries: Array<{
      name: string;
      note?: string; // For country-specific parenthetical info
      zones?: Array<{ name: string; range: string }>; // For US zones
      range?: string; // For other countries
    }>;
  };
  reporting?: string;
  department?: string;
  exemption?: string;
  requisitionId?: string;
  bonusProgram?: string; // New field for bonus program info
  additionalBoilerplate?: string; // New field for careers page boilerplate
}

export function parseJobDetailsFromContent(content: string): JobDetails {
  const $ = cheerio.load(content);
  const details: JobDetails = {
    compensation: { countries: [] }, // Initialize compensation as required
  };

  // --- Extract Location ---
  const locationText = $('li:contains("Location:")').first().text();
  if (locationText) {
    details.location = locationText.replace(/Location(?:s)?:/i, "").trim();
  }

  // --- Extract Type and Exemption ---
  const typeAndExemptionListItems = $("li").filter((i, el) => {
    const text = $(el).text();
    return (
      /(Full-time|Part-time|Contract|Permanent)/i.test(text) ||
      /(Exempt|Temporary)/i.test(text)
    );
  });

  typeAndExemptionListItems.each((i, el) => {
    const text = $(el).text();
    if (/(Full-time|Part-time|Contract|Permanent)/i.test(text)) {
      details.type = text
        .match(/(Full-time|Part-time|Contract|Permanent)/i)?.[0]
        .trim();
    }
    if (/(Exempt|Temporary)/i.test(text)) {
      details.exemption = text.match(/(Exempt|Temporary)/i)?.[0].trim();
    }
  });

  // --- Extract Compensation ---
  const compensationListItem = $(
    'li:contains("The cash compensation for this role is tailored")'
  ).first();
  if (compensationListItem.length > 0) {
    const generalBoilerplateText = compensationListItem
      .contents()
      .filter(function () {
        return this.nodeType === 3; // Node.TEXT_NODE
      })
      .text()
      .trim();
    if (generalBoilerplateText) {
      details.compensation.generalBoilerplate = generalBoilerplateText;
    }

    const countryList = compensationListItem.find("> ul > li");

    countryList.each((i, el) => {
      const $countryEl = $(el); // Cheerio object for the current country's <li>
      const countryText = $countryEl.text();
      const countryHtml = $countryEl.html();

      // New regex to extract country name, note, and the remaining HTML content after the note
      const countryInfoMatch = countryHtml?.match(
        /(United States|Canada)\s*\(([^)]*?)\)(?:<br\/?>)?([\s\S]*)/i
      );

      if (countryInfoMatch) {
        const name = countryInfoMatch[1].trim();
        const note = countryInfoMatch[2].trim();
        const remainingHtmlContent = countryInfoMatch[3] || ""; // Content after the note

        const countryEntry: JobDetails["compensation"]["countries"][0] = {
          name,
          note,
        };

        const $nestedUl = $countryEl.find("> ul"); // Find the direct child <ul>
        if ($nestedUl.length > 0) {
          const $innerContent = cheerio.load(
            $nestedUl.html() || "",
            null,
            false
          );

          if (name === "United States") {
            const zones: Array<{ name: string; range: string }> = [];
            $innerContent("li").each((zoneI, zoneEl) => {
              const zoneText = $(zoneEl).text();
              const zoneMatch = zoneText.match(
                /(Zone\s+[A-Z]):\s*(\$[\d,]+\s*-\s*\$[\d,]+)/i
              );
              if (zoneMatch) {
                zones.push({
                  name: zoneMatch[1].trim(),
                  range: zoneMatch[2].trim(),
                });
              }
            });
            if (zones.length > 0) {
              countryEntry.zones = zones;
            }
          } else if (name === "Canada") {
            const rangeMatch = $innerContent("li")
              .first()
              .text()
              .match(/([\d,]+\s*-\s*[\d,]+)/i);
            if (rangeMatch) {
              countryEntry.range = rangeMatch[1].trim();
            }
          }
        }
        details.compensation.countries.push(countryEntry);
      }
    });
  }

  // --- Extract Bonus Program ---
  const bonusProgramElement = $(
    'p:contains("This role is also eligible to participate in Webflow\'s company-wide bonus program.")'
  ).first();
  if (bonusProgramElement.length > 0) {
    details.bonusProgram = bonusProgramElement.text().trim();
  }

  // --- Extract Additional Boilerplate ---
  const additionalBoilerplateElement = $(
    'p:contains("Please visit our ")'
  ).first();
  if (additionalBoilerplateElement.length > 0) {
    details.additionalBoilerplate = additionalBoilerplateElement.text().trim();
  }

  // --- Extract Reporting ---
  const reportingElement = $('p:contains("Reporting to")').first();
  const reportingText =
    reportingElement.length > 0
      ? reportingElement.text()
      : $('li:contains("Reporting to")').first().text();
  if (reportingText) {
    details.reporting = reportingText.replace(/Reporting\s+to\s*/i, "").trim();
  }

  return details;
}

export function extractJobDetailsFromAboutRole(content: string): {
  jobDetails: string;
  roleDescription: string;
} {
  // Pattern to directly match the "As a [Fuzzy Job Title], you will..." paragraph
  const roleDescriptionStartMatch = content.match(
    /(<p[^>]*>\s*As\s+a[\s\S]*?you(?:'ll| will)[\s\S]*?<\/p>)/i
  );

  let roleDescriptionStartIndex = -1;
  let matchedPatternLength = 0;

  if (roleDescriptionStartMatch) {
    roleDescriptionStartIndex = roleDescriptionStartMatch.index!;
    matchedPatternLength = roleDescriptionStartMatch[0].length;
  }

  if (roleDescriptionStartIndex !== -1) {
    const jobDetailsContent = content.substring(0, roleDescriptionStartIndex);
    const roleDescriptionContent = content.substring(roleDescriptionStartIndex);

    return {
      jobDetails: jobDetailsContent.trim(),
      roleDescription: roleDescriptionContent.trim(),
    };
  }

  // If no specific role description start pattern is found, treat the entire content
  // as job details if the role description cannot be clearly identified.
  return {
    jobDetails: content.trim(), // Entire content becomes job details
    roleDescription: "", // No distinct role description found
  };
}
