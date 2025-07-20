# Brawl Stars MCP

A Model Context Protocol (MCP) server that wraps the Brawl Stars API, providing easy access to game data, player statistics, and club information for AI assistants and LLMs.

## 🎮 What is this?

This is a **Model Context Protocol (MCP) server** that allows AI assistants and Large Language Models (LLMs) to access real-time Brawl Stars game data. It's designed to be integrated with AI tools like Claude, GPT-4, or any MCP-compatible AI assistant.

## ✨ Features

- **Player Data**: Get player profiles, statistics, and battle logs
- **Brawler Information**: Access brawler details, stats, star powers, and gadgets
- **Club Data**: Retrieve club information and member lists
- **Battle Logs**: Get recent battle history and results
- **Game Modes**: Access information about different game modes
- **Maps**: Get map data and rotation information
- **Events**: Current and upcoming events
- **Automatic Tag Cleaning**: Handles Brawl Stars player/club tags with proper URL encoding

## 🚀 Installation

### Prerequisites

- Node.js 18.0.0 or higher
- A Brawl Stars API token (get one from [Brawl Stars Developer Portal](https://developer.brawlstars.com/))

### As an NPM Package (Recommended)

```bash
npm install -g brawlstars-mcp
```

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/LRxDarkDevil/BrawlStars-MCP.git
   cd brawlstars-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## 🤖 AI Integration

### What is MCP?

Model Context Protocol (MCP) is a standard that allows AI assistants to securely connect to external data sources and tools. This server enables AI assistants to access real-time Brawl Stars data.

### Supported AI Platforms

This MCP server works with any AI assistant that supports the Model Context Protocol, including:

- **Claude Desktop** (Anthropic)
- **GPT-4 with MCP plugins**
- **Custom AI assistants** using MCP SDK
- **Cursor AI** (with MCP support)

### Integration Instructions

#### For Claude Desktop

1. **Get your Brawl Stars API token** from the [Brawl Stars Developer Portal](https://developer.brawlstars.com/)

2. **Install the MCP server**:
   ```bash
   npm install -g brawlstars-mcp
   ```

3. **Configure Claude Desktop**:
   - Open Claude Desktop
   - Go to Settings → Model Context Protocol
   - Add a new server with these settings:
     ```
     Name: Brawl Stars
     Command: npx
     Arguments: brawlstars-mcp --token YOUR_API_TOKEN_HERE
     ```

4. **Restart Claude Desktop** and start asking about Brawl Stars!

#### For Other AI Assistants

Add this configuration to your MCP config file:

```json
{
  "mcpServers": {
    "brawlstars": {
      "command": "npx",
      "args": ["brawlstars-mcp", "--token", "YOUR_API_TOKEN_HERE"]
    }
  }
}
```

### Example AI Conversations

Once integrated, you can ask your AI assistant questions like:

- "Get player information for #98VC8YUR"
- "Show me the battle log for player #2Y0J0Q0"
- "What are the stats for Shelly brawler?"
- "Get information about club #CCY9CGPQ"
- "Show me all available brawlers"
- "What events are currently running?"

## 📚 API Reference

The MCP provides the following functions:

| Function | Description | Parameters |
|----------|-------------|------------|
| `get_player` | Get player information by tag | `tag` (string) |
| `get_player_battlelog` | Get player's recent battles | `tag` (string) |
| `get_brawler` | Get brawler information by ID | `id` (number) |
| `get_brawlers` | Get all available brawlers | None |
| `get_club` | Get club information by tag | `tag` (string) |
| `get_club_members` | Get club member list | `tag` (string) |
| `get_events` | Get current and upcoming events | None |
| `get_maps` | Get available maps | None |
| `get_game_modes` | Get game modes information | None |


## 🔧 Development

### Building from Source

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Test the build
npm start -- --token YOUR_API_TOKEN_HERE
```

### Project Structure

```
src/
├── api/
│   └── brawlstars-api.ts    # Main API wrapper
├── types/
│   ├── index.ts             # Type definitions
│   └── schemas.ts           # Zod schemas for validation
├── utils/
│   └── helpers.ts           # Utility functions
└── index.ts                 # MCP server entry point
```

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🛠️ Troubleshooting

### Common Issues

**"Resource not found" error:**
- Make sure the player/club tag is correct
- Verify your API token is valid
- Check if the player/club still exists

**"API token is required" error:**
- Ensure you're passing the `--token` argument
- Verify your API token from the Brawl Stars Developer Portal

**MCP connection issues:**
- Restart your AI assistant after adding the MCP server
- Check that the command and arguments are correct
- Ensure Node.js is installed and accessible

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Brawl Stars API](https://developer.brawlstars.com/) for providing the game data
- [Model Context Protocol](https://modelcontextprotocol.io/) for the MCP standard
- The Brawl Stars community for inspiration

**Note**: This tool is designed for AI assistants and LLMs. 