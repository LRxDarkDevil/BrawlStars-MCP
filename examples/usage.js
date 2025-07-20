// Example usage of Brawl Stars MCP
// This file shows how to interact with the MCP server

// Example 1: Get player information
// Function: get_player
// Parameters: { tag: "#2Y0J0Q0" }
// Returns: Player profile with stats, brawlers, etc.

// Example 2: Get player's battle log
// Function: get_player_battlelog
// Parameters: { tag: "#2Y0J0Q0" }
// Returns: Recent battles with results and details

// Example 3: Get brawler information
// Function: get_brawler
// Parameters: { id: 16000000 } // Shelly's ID
// Returns: Brawler details, star powers, gadgets

// Example 4: Get all brawlers
// Function: get_brawlers
// Parameters: {}
// Returns: List of all available brawlers

// Example 5: Get club information
// Function: get_club
// Parameters: { tag: "#2Y0J0Q0" }
// Returns: Club details, members, trophies

// Example 6: Get club members
// Function: get_club_members
// Parameters: { tag: "#2Y0J0Q0" }
// Returns: List of club members with roles

// Example 7: Get current events
// Function: get_events
// Parameters: {}
// Returns: Current and upcoming events

// Example 8: Get available maps
// Function: get_maps
// Parameters: {}
// Returns: All available maps with game modes

// Example 9: Get game modes
// Function: get_game_modes
// Parameters: {}
// Returns: All game modes with descriptions

// Sample MCP Configuration:
/*
{
  "mcpServers": {
    "brawlstars": {
      "command": "npx",
      "args": ["brawlstars-mcp", "--token", "YOUR_API_TOKEN_HERE"],
      "env": {}
    }
  }
}
*/

// Common Brawler IDs:
// 16000000 - Shelly
// 16000001 - Colt
// 16000002 - Bull
// 16000003 - Brock
// 16000004 - Rico
// 16000005 - Spike
// 16000006 - Barley
// 16000007 - Jessie
// 16000008 - Nita
// 16000009 - Dynamike
// 16000010 - El Primo
// 16000011 - Mortis
// 16000012 - Crow
// 16000013 - Poco
// 16000014 - Bo
// 16000015 - Piper
// 16000016 - Pam
// 16000017 - Tara
// 16000018 - Darryl
// 16000019 - Penny
// 16000020 - Frank
// 16000021 - Gene
// 16000022 - Tick
// 16000023 - Leon
// 16000024 - Rosa
// 16000025 - Carl
// 16000026 - Bibi
// 16000027 - 8-Bit
// 16000028 - Sandy
// 16000029 - Bea
// 16000030 - Emz
// 16000031 - Mr. P
// 16000032 - Max
// 16000033 - Jacky
// 16000034 - Gale
// 16000035 - Nani
// 16000036 - Sprout
// 16000037 - Surge
// 16000038 - Colette
// 16000039 - Amber
// 16000040 - Lou
// 16000041 - Colonel Ruffs
// 16000042 - Belle
// 16000043 - Squeak
// 16000044 - Grom
// 16000045 - Ash
// 16000046 - Meg
// 16000047 - Lola
// 16000048 - Fang
// 16000049 - Eve
// 16000050 - Janet
// 16000051 - Bonnie
// 16000052 - Otis
// 16000053 - Sam
// 16000054 - Gus
// 16000055 - Buster
// 16000056 - Chester
// 16000057 - Gray
// 16000058 - Willow
// 16000059 - Doug
// 16000060 - Mandy
// 16000061 - R-T
// 16000062 - Maisie
// 16000063 - Hank
// 16000064 - Pearl
// 16000065 - Cordelius
// 16000066 - Chuck
// 16000067 - Mico
// 16000068 - Kit
// 16000069 - Larry & Lawrie
// 16000070 - Angelo
// 16000071 - Melodie
// 16000072 - Charlie
// 16000073 - Cordelius
// 16000074 - Maisie
// 16000075 - Pearl
// 16000076 - Angelo
// 16000077 - Melodie
// 16000078 - Charlie 