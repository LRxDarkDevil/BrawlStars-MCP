/**
 * Utility functions for Brawl Stars MCP
 */

/**
 * Clean player/club tag by removing # if present
 */
export function cleanTag(tag: string): string {
  return tag.startsWith("#") ? tag.substring(1) : tag;
}

/**
 * Validate if a tag has the correct format
 */
export function isValidTag(tag: string): boolean {
  const clean = cleanTag(tag);
  // Brawl Stars tags are typically 8-10 characters long and contain letters and numbers
  return /^[0-9A-Z]{8,10}$/.test(clean);
}

/**
 * Format trophy count with commas
 */
export function formatTrophies(trophies: number): string {
  return trophies.toLocaleString();
}

/**
 * Get brawler rarity color
 */
export function getBrawlerRarityColor(rarity: string): string {
  const colors: Record<string, string> = {
    "Starting": "#FFFFFF",
    "Rare": "#4CAF50",
    "Super Rare": "#2196F3",
    "Epic": "#9C27B0",
    "Mythic": "#FF9800",
    "Legendary": "#F44336",
    "Chromatic": "#E91E63",
  };
  return colors[rarity] || "#FFFFFF";
}

/**
 * Format battle result for display
 */
export function formatBattleResult(result: string): string {
  switch (result) {
    case "victory":
      return "Victory";
    case "defeat":
      return "Defeat";
    case "draw":
      return "Draw";
    default:
      return result;
  }
}

/**
 * Get time ago from timestamp
 */
export function getTimeAgo(timestamp: string): string {
  const now = new Date();
  const time = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
} 