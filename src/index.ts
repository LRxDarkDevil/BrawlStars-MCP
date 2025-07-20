#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { BrawlStarsAPI } from "./api/brawlstars-api.js";

// Parse command line arguments
const args = process.argv.slice(2);
let apiToken = "";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--token" || args[i] === "-t") {
    apiToken = args[i + 1];
    break;
  }
}

if (!apiToken) {
  console.error("Error: API token is required. Use --token or -t to provide your Brawl Stars API token.");
      console.error("Example: brawl-stars-mcp --token YOUR_API_TOKEN");
  process.exit(1);
}

const server = new Server(
  {
    name: "brawl-stars-mcp",
    version: "1.0.0",
  }
);

const api = new BrawlStarsAPI(apiToken);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_player",
        description: "Get player information by tag",
        inputSchema: {
          type: "object",
          properties: {
            tag: {
              type: "string",
              description: "Player tag (e.g., #2Y0J0Q0)",
            },
          },
          required: ["tag"],
        },
      },
      {
        name: "get_player_battlelog",
        description: "Get player's recent battle log",
        inputSchema: {
          type: "object",
          properties: {
            tag: {
              type: "string",
              description: "Player tag (e.g., #2Y0J0Q0)",
            },
          },
          required: ["tag"],
        },
      },
      {
        name: "get_brawler",
        description: "Get brawler information by ID",
        inputSchema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Brawler ID (e.g., 16000000 for Shelly)",
            },
          },
          required: ["id"],
        },
      },
      {
        name: "get_brawlers",
        description: "Get all available brawlers",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_club",
        description: "Get club information by tag",
        inputSchema: {
          type: "object",
          properties: {
            tag: {
              type: "string",
              description: "Club tag (e.g., #2Y0J0Q0)",
            },
          },
          required: ["tag"],
        },
      },
      {
        name: "get_club_members",
        description: "Get club member list",
        inputSchema: {
          type: "object",
          properties: {
            tag: {
              type: "string",
              description: "Club tag (e.g., #2Y0J0Q0)",
            },
          },
          required: ["tag"],
        },
      },
      {
        name: "get_events",
        description: "Get current and upcoming events",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_maps",
        description: "Get available maps",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_game_modes",
        description: "Get game modes information",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "get_player":
        const player = await api.getPlayer(args?.tag as string);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(player, null, 2),
            },
          ],
        };

      case "get_player_battlelog":
        const battlelog = await api.getPlayerBattlelog(args?.tag as string);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(battlelog, null, 2),
            },
          ],
        };

      case "get_brawler":
        const brawler = await api.getBrawler(args?.id as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(brawler, null, 2),
            },
          ],
        };

      case "get_brawlers":
        const brawlers = await api.getBrawlers();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(brawlers, null, 2),
            },
          ],
        };

      case "get_club":
        const club = await api.getClub(args?.tag as string);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(club, null, 2),
            },
          ],
        };

      case "get_club_members":
        const members = await api.getClubMembers(args?.tag as string);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(members, null, 2),
            },
          ],
        };

      case "get_events":
        const events = await api.getEvents();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(events, null, 2),
            },
          ],
        };

      case "get_maps":
        const maps = await api.getMaps();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(maps, null, 2),
            },
          ],
        };

      case "get_game_modes":
        const gameModes = await api.getGameModes();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(gameModes, null, 2),
            },
          ],
        };

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
server.connect(transport);

console.error("Brawl Stars MCP server started"); 