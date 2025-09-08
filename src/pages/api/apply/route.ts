import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const ghSlug = formData.get("ghSlug") as string;
    const jobId = formData.get("jobId") as string;

    if (!ghSlug || !jobId) {
      return new Response(
        JSON.stringify({
          error: "Missing required parameters: ghSlug and jobId",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    // Create a new FormData object to forward to Greenhouse
    const greenhouseFormData = new FormData();

    // Add all form fields to the Greenhouse request
    for (const [key, value] of formData.entries()) {
      if (key !== "ghSlug" && key !== "jobId") {
        greenhouseFormData.append(key, value);
      }
    }

    // Submit to Greenhouse API
    const response = await fetch(
      `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(
        ghSlug
      )}/jobs/${encodeURIComponent(jobId)}`,
      {
        method: "POST",
        body: greenhouseFormData,
        headers: {
          // Don't set Content-Type header - let the browser set it with boundary for multipart/form-data
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Greenhouse API error:", response.status, errorText);

      return new Response(
        JSON.stringify({
          error: "Failed to submit application",
          details: errorText,
          status: response.status,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
};
