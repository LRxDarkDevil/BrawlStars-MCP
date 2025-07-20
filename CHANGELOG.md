# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- Initial release of Brawl Stars MCP server
- Support for all major Brawl Stars API endpoints:
  - Player information and battle logs
  - Brawler details and abilities
  - Club information and member lists
  - Current events and game modes
  - Available maps
- Command-line argument support for API token
- Comprehensive TypeScript types and Zod validation
- Error handling and rate limiting support
- Utility functions for common operations
- Jest test suite
- NPM package configuration

### Features
- `get_player`: Get player information by tag
- `get_player_battlelog`: Get player's recent battle log
- `get_brawler`: Get brawler information by ID
- `get_brawlers`: Get all available brawlers
- `get_club`: Get club information by tag
- `get_club_members`: Get club member list
- `get_events`: Get current and upcoming events
- `get_maps`: Get available maps
- `get_game_modes`: Get game modes information

### Technical
- Built with TypeScript and ES modules
- Uses Model Context Protocol SDK
- Comprehensive error handling
- Input validation with Zod schemas
- Axios for HTTP requests
- Support for Node.js 18+ 