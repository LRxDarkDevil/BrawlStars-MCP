import axios, { AxiosInstance } from "axios";
import { z } from "zod";
import {
  PlayerSchema,
  PlayerBattlelogSchema,
  BrawlerSchema,
  BrawlersListSchema,
  ClubSchema,
  ClubMembersSchema,
  EventsSchema,
  MapsSchema,
  GameModesSchema,
} from "../types/schemas.js";

export class BrawlStarsAPI {
  private client: AxiosInstance;
  private baseURL = "https://api.brawlstars.com/v1";

  constructor(apiToken: string) {
    if (!apiToken) {
      throw new Error("API token is required");
    }

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Get player information by tag
   */
  async getPlayer(tag: string): Promise<z.infer<typeof PlayerSchema>> {
    try {
      const cleanTag = this.cleanTag(tag);
      console.error(`[DEBUG] Original tag: "${tag}" -> Cleaned tag: "${cleanTag}"`);
      const response = await this.client.get(`/players/${cleanTag}`);
      return PlayerSchema.parse(response.data);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid player data format: ${error.message}`);
      }
      if (error.response) {
        throw new Error(`API Error ${error.response.status}: ${error.response.statusText} - ${JSON.stringify(error.response.data)}`);
      }
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  /**
   * Get player's battle log
   */
  async getPlayerBattlelog(tag: string): Promise<z.infer<typeof PlayerBattlelogSchema>> {
    try {
      const cleanTag = this.cleanTag(tag);
      console.error(`[DEBUG] Original tag: "${tag}" -> Cleaned tag: "${cleanTag}"`);
      const response = await this.client.get(`/players/${cleanTag}/battlelog`);
      return PlayerBattlelogSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid battle log data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get brawler information by ID
   */
  async getBrawler(id: number): Promise<z.infer<typeof BrawlerSchema>> {
    try {
      const response = await this.client.get(`/brawlers/${id}`);
      return BrawlerSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid brawler data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get all available brawlers
   */
  async getBrawlers(): Promise<z.infer<typeof BrawlersListSchema>> {
    try {
      const response = await this.client.get("/brawlers");
      return BrawlersListSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid brawlers data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get club information by tag
   */
  async getClub(tag: string): Promise<z.infer<typeof ClubSchema>> {
    try {
      const cleanTag = this.cleanTag(tag);
      console.error(`[DEBUG] Original tag: "${tag}" -> Cleaned tag: "${cleanTag}"`);
      const response = await this.client.get(`/clubs/${cleanTag}`);
      return ClubSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid club data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get club members list
   */
  async getClubMembers(tag: string): Promise<z.infer<typeof ClubMembersSchema>> {
    try {
      const cleanTag = this.cleanTag(tag);
      console.error(`Original tag: "${tag}" -> Cleaned tag: "${cleanTag}"`);
      const response = await this.client.get(`/clubs/${cleanTag}/members`);
      return ClubMembersSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid club members data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get current and upcoming events
   */
  async getEvents(): Promise<z.infer<typeof EventsSchema>> {
    try {
      const response = await this.client.get("/events/rotation");
      return EventsSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid events data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get available maps
   */
  async getMaps(): Promise<z.infer<typeof MapsSchema>> {
    try {
      const response = await this.client.get("/maps");
      return MapsSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid maps data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Get game modes information
   */
  async getGameModes(): Promise<z.infer<typeof GameModesSchema>> {
    try {
      const response = await this.client.get("/gamemodes");
      return GameModesSchema.parse(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid game modes data format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Clean player/club tag by ensuring it's URL-encoded with %23
   */
  private cleanTag(tag: string): string {
    // Handle various tag formats and ensure proper URL encoding
    let cleanTag = tag.trim();
    
    // If it already starts with %23, return as is
    if (cleanTag.startsWith('%23')) {
      return cleanTag;
    }
    
    // Remove all # characters (in case there are multiple)
    cleanTag = cleanTag.replace(/#/g, '');
    
    // Add %23 prefix
    return `%23${cleanTag}`;
  }
} 