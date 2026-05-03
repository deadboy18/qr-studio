// Cloudflare Worker: CORS image proxy for QR Studio ChromaCode
// Deploy at: https://workers.cloudflare.com
// Free tier: 100,000 requests/day
//
// Usage: https://your-worker.your-subdomain.workers.dev/?url=https://example.com/favicon.ico

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(request),
      });
    }

    if (!target) {
      return new Response(JSON.stringify({ error: "Missing ?url= parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(request) },
      });
    }

    // Validate URL
    let parsed;
    try {
      parsed = new URL(target);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(request) },
      });
    }

    // Only allow image-related fetches (security)
    try {
      const resp = await fetch(target, {
        headers: {
          "User-Agent": "QRStudio-Favicon-Proxy/1.0",
          "Accept": "image/*,*/*;q=0.8",
        },
        redirect: "follow",
      });

      // Only proxy successful responses
      if (!resp.ok) {
        return new Response(JSON.stringify({ error: `Upstream returned ${resp.status}` }), {
          status: resp.status,
          headers: { "Content-Type": "application/json", ...corsHeaders(request) },
        });
      }

      // Check content type — only allow images
      const ct = resp.headers.get("content-type") || "";
      if (!ct.includes("image") && !ct.includes("octet-stream") && !ct.includes("icon")) {
        return new Response(JSON.stringify({ error: "Not an image" }), {
          status: 415,
          headers: { "Content-Type": "application/json", ...corsHeaders(request) },
        });
      }

      // Stream the image back with CORS headers
      const body = await resp.arrayBuffer();
      return new Response(body, {
        status: 200,
        headers: {
          "Content-Type": ct,
          "Cache-Control": "public, max-age=86400",
          ...corsHeaders(request),
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Fetch failed: " + err.message }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(request) },
      });
    }
  },
};

function corsHeaders(request) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}
