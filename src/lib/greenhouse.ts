interface GreenhouseJob {
  id: number;
  title: string;
  content?: string;
  updated_at?: string;
  location: {
    name: string;
  };
  departments: Array<{
    id: number;
    name: string;
  }>;
  offices: Array<{
    id: number;
    name: string;
    location: string;
  }>;
  questions?: Array<{
    id: number;
    label: string;
    required: boolean;
    fields: Array<{
      id: number;
      label: string;
      type: string;
      required: boolean;
    }>;
  }>;
  [key: string]: any;
}

interface DepartmentJobs {
  jobs: Array<{
    id: number;
    title: string;
    location: {
      name: string;
    };
    absolute_url: string;
  }>;
}

export interface GreenhouseDepartment {
  id: number;
  name: string;
  jobs: Array<{
    id: number;
    title: string;
    location: {
      name: string;
    };
    absolute_url: string;
  }>;
}

export interface GreenhouseQuestion {
  id: number;
  label: string;
  required: boolean;
  description?: string;
  name?: string;
  fields: Array<{
    id: number;
    label: string;
    name: string;
    type: string;
    required: boolean;
    values?: Array<{
      value: string;
      label: string;
    }>;
  }>;
}

export async function fetchGreenhouseJobWithQuestions(
  ghSlug: string,
  jobId: string
): Promise<GreenhouseJob | null> {
  try {
    const url = `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(
      ghSlug
    )}/jobs/${encodeURIComponent(jobId)}?questions=true&pay_transparency=true`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `Greenhouse API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const jobData = await response.json();
    return jobData as GreenhouseJob;
  } catch (error) {
    console.error("Error fetching job from Greenhouse:", error);
    return null;
  }
}

export async function fetchGreenhouseJob(
  ghSlug: string,
  jobId: string
): Promise<GreenhouseJob | null> {
  return fetchGreenhouseJobWithQuestions(ghSlug, jobId);
}

export async function fetchDepartmentJobs(
  ghSlug: string,
  departmentId: number
): Promise<GreenhouseDepartment | null> {
  try {
    const url = `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(
      ghSlug
    )}/departments/${departmentId}/jobs`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `Greenhouse API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    return data as GreenhouseDepartment;
  } catch (error) {
    console.error("Error fetching department jobs from Greenhouse:", error);
    return null;
  }
}

export function decodeHtmlEntities(text: string): string {
  // Server-side HTML entity decoding
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&bull;/g, "•")
    .replace(/&middot;/g, "·");
}
