import type { APIRoute } from "astro";
import { buildMcpTxt } from "../lib/mcp-txt";

export const GET: APIRoute = () => {
  return new Response(buildMcpTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
