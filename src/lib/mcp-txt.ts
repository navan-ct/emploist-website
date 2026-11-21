import { SITE } from "./site";

/** Hosted MCP endpoint assistants connect to. */
export const MCP_SERVER_URL = "https://mcp.emploist.com";

/** In-app page with per-client connection steps. */
export const MCP_APP_URL = "https://app.emploist.com/mcp";

/**
 * Precise `/mcp.txt` for AI agents. Keep this the single source of connection facts.
 * The marketing Copy MCP setup button uses localized `mcp.setupCopy` instead.
 */
export function buildMcpTxt(): string {
  const page = new URL("/mcp/", SITE.url).href;
  const docs = new URL("/docs/connect-an-ai-assistant/", SITE.url).href;
  const claudeGuide = new URL("/blog/how-to-manage-hiring-from-claude-with-mcp/", SITE.url).href;

  return `# Emploist MCP

> Emploist is applicant tracking software. This file tells an AI assistant how to connect to Emploist's MCP server and what it can do after connecting.

## Connection

- Server URL: ${MCP_SERVER_URL}
- Protocol: Model Context Protocol (MCP) over Streamable HTTP (SSE if the client requires it)
- Authentication: OAuth. Sign in with Emploist when prompted. Do not ask for an API key.
- In-app steps: ${MCP_APP_URL}
- Marketing overview: ${page}

## Claude

1. Open Customize → Connectors (or Organization settings → Connectors on Team/Enterprise).
2. Add a custom connector named Emploist.
3. Paste ${MCP_SERVER_URL} as the MCP server URL.
4. Keep Sign in now and Claude's detected OAuth options.
5. Approve access in Emploist when the browser opens.
6. Use Emploist tools from the chat. Confirm write actions when Claude asks.

## ChatGPT

1. Use ChatGPT on the web.
2. Open Plugins → Add custom MCP server.
3. Name it Emploist. Set the server URL to ${MCP_SERVER_URL}.
4. Choose OAuth, create the plugin, and install it.
5. In a chat, type @ and select Emploist.
6. Confirm write actions before they run.

## Other clients

Cursor, VS Code, Claude Code, Copilot, Gemini, Grok, and other MCP clients use the same URL: ${MCP_SERVER_URL}. Prefer OAuth. Follow ${MCP_APP_URL} for client-specific steps.

## After connecting

Help the signed-in Emploist user with hiring work:

- List jobs and applications
- Rank or explain match scores against a job
- Move applicants between stages
- Leave comments (including @mentions when supported)
- Create, update, or publish jobs and application forms when tools allow

Rules:

- Act only with the connected user's Emploist role and permissions.
- Do not attempt billing, team invites, or deleting the company or account.
- Confirm before write or delete tools.
- Ranking an application uses one Emploist AI credit, same as in the app.

## Disconnect

The user can disconnect an assistant on ${MCP_APP_URL}. An admin can turn MCP off for the whole company in Emploist settings.

## More

- Connect guide: ${docs}
- Claude walkthrough: ${claudeGuide}
- Support: ${SITE.supportEmail}
`;
}
