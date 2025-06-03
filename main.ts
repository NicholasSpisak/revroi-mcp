import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

let baseUrl = "https://revroi.oaroulette.com"; // Base URL from Swagger spec or default

const server = new McpServer({
  name: "RevROI MCP Server API",
  version: "1.0.0",
});

function parameterizeEndpoint(
  endpoint: string,
  parameters: Record<string, any>
): string {
  // Handle path parameters
  let path = endpoint.replace(/\{([^}]+)\}/g, (match, paramName) => {
    const value = parameters[paramName];
    if (value === undefined || value === null) {
      throw new Error(`Missing required parameter: ${paramName}`);
    }
    return encodeURIComponent(value);
  });

  // Handle query parameters
  const queryParams = Object.entries(parameters)
    .filter(([key]) => !endpoint.includes(`{${key}}`)) // Exclude path parameters
    .filter(([_, value]) => value !== undefined && value !== null) // Exclude null/undefined values
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join("&");
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");

  if (queryParams) {
    path += `?${queryParams}`;
  }

  return path;
}

async function callApi(
  endpoint: string,
  method: string,
  body?: any,
  contentType?: string
) {
  const headers: Record<string, string> = {};
  if (contentType) {
    headers["Content-Type"] = contentType;
  }
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data),
      },
    ],
  };
}

function registerTool(
  name: string,
  description: string,
  parameters: any,
  handler: (params: any) => Promise<any>
) {
  try {
    server.tool(name, description, parameters, handler);
  } catch (error) {
    console.error(`Failed to register tool ${name}:`, error);
  }
}

// Default tools
registerTool(
  "get_servers",
  "Get available servers from the Swagger spec",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              url: "https://revroi.oaroulette.com",
              description: "Production server",
            },
            { url: "http://localhost:3000", description: "Development server" },
          ]),
        },
      ],
    };
  }
);

registerTool(
  "set_base_url",
  "Set the base URL for API requests",
  {
    url: z.string().describe("The new base URL"),
  },
  async (params) => {
    const validatedParams = z.object({ url: z.string() }).parse(params);
    baseUrl = validatedParams.url;
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ success: true, newBaseUrl: baseUrl }),
        },
      ],
    };
  }
);

/* Retrieves available discounted gift card options for the specified retailer.
Results are sorted by discount rate with the highest discounts first.
 */
registerTool(
  "get_gift-cards_by_retailer",
  "Retrieves available discounted gift card options for the specified retailer.\nResults are sorted by discount rate with the highest discounts first.\n",
  {
    retailer: z
      .string()
      .describe("Retailer identifier (e.g., kohls, target, walmart)"),
  },
  async (params) => {
    try {
      const validatedParams = z
        .object({
          retailer: z
            .string()
            .describe("Retailer identifier (e.g., kohls, target, walmart)"),
        })
        .parse(params);
      const endpoint = parameterizeEndpoint("/", {
        action: "gift_cards",
        hostname: validatedParams.retailer,
      });
      return callApi(endpoint, "GET");
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: "Validation error",
                details: error.errors,
              }),
            },
          ],
        };
      }
      throw error;
    }
  }
);

/* Retrieves cashback offers, travel rewards, and credit card points for the specified retailer.
Results include standard cashback percentages, airline/hotel points, and credit card rewards.
 */
registerTool(
  "get_cashback_by_retailer",
  "Retrieves cashback offers, travel rewards, and credit card points for the specified retailer.\nResults include standard cashback percentages, airline/hotel points, and credit card rewards.\n",
  {
    retailer: z
      .string()
      .describe("Retailer identifier (e.g., kohls, target, walmart)"),
  },
  async (params) => {
    try {
      const validatedParams = z
        .object({
          retailer: z
            .string()
            .describe("Retailer identifier (e.g., kohls, target, walmart)"),
        })
        .parse(params);
      const endpoint = parameterizeEndpoint("/", {
        action: "cashback",
        hostname: validatedParams.retailer,
      });
      return callApi(endpoint, "GET");
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: "Validation error",
                details: error.errors,
              }),
            },
          ],
        };
      }
      throw error;
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
