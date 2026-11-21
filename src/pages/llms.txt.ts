import type { APIRoute } from "astro";
import { buildLlmsTxt } from "../lib/llms";

export const GET: APIRoute = async () => {
  const body = await buildLlmsTxt();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
