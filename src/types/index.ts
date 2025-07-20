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
} from "./schemas.js";

// Export all types
export type Player = z.infer<typeof PlayerSchema>;
export type PlayerBattlelog = z.infer<typeof PlayerBattlelogSchema>;
export type Brawler = z.infer<typeof BrawlerSchema>;
export type BrawlersList = z.infer<typeof BrawlersListSchema>;
export type Club = z.infer<typeof ClubSchema>;
export type ClubMembers = z.infer<typeof ClubMembersSchema>;
export type Events = z.infer<typeof EventsSchema>;
export type Maps = z.infer<typeof MapsSchema>;
export type GameModes = z.infer<typeof GameModesSchema>;

// Export schemas
export {
  PlayerSchema,
  PlayerBattlelogSchema,
  BrawlerSchema,
  BrawlersListSchema,
  ClubSchema,
  ClubMembersSchema,
  EventsSchema,
  MapsSchema,
  GameModesSchema,
}; 