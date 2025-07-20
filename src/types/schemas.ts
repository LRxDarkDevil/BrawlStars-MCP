import { z } from "zod";

// Player schemas
export const PlayerSchema = z.object({
  tag: z.string(),
  name: z.string(),
  nameColor: z.string().optional(),
  icon: z.object({
    id: z.number(),
  }),
  trophies: z.number(),
  highestTrophies: z.number(),
  powerPlayPoints: z.number().optional(),
  highestPowerPlayPoints: z.number().optional(),
  expLevel: z.number(),
  expPoints: z.number(),
  isQualifiedFromChampionshipChallenge: z.boolean().optional(),
  "3vs3Victories": z.number(),
  soloVictories: z.number().optional(),
  duoVictories: z.number().optional(),
  bestRoboRumbleTime: z.number().optional(),
  bestTimeAsBigBrawler: z.number().optional(),
  club: z.object({
    tag: z.string(),
    name: z.string(),
  }).optional(),
  brawlers: z.array(z.object({
    id: z.number(),
    name: z.string(),
    power: z.number(),
    rank: z.number(),
    trophies: z.number(),
    highestTrophies: z.number(),
    gears: z.array(z.object({
      id: z.number(),
      name: z.string(),
      level: z.number(),
    })).optional(),
    starPowers: z.array(z.object({
      id: z.number(),
      name: z.string(),
    })).optional(),
    gadgets: z.array(z.object({
      id: z.number(),
      name: z.string(),
    })).optional(),
  })),
});

export const PlayerBattlelogSchema = z.object({
  items: z.array(z.object({
    battleTime: z.string(),
    event: z.object({
      id: z.number(),
      mode: z.string(),
      map: z.string(),
    }),
    battle: z.object({
      mode: z.string(),
      type: z.string(),
      result: z.string().optional(),
      duration: z.number().optional(),
      trophyChange: z.number().optional(),
      starPlayer: z.object({
        tag: z.string(),
        name: z.string(),
        brawler: z.object({
          id: z.number(),
          name: z.string(),
          power: z.number(),
          trophies: z.number(),
        }),
      }).optional(),
      teams: z.array(z.array(z.object({
        tag: z.string(),
        name: z.string(),
        brawler: z.object({
          id: z.number(),
          name: z.string(),
          power: z.number(),
          trophies: z.number(),
        }),
      }))).optional(),
      players: z.array(z.object({
        tag: z.string(),
        name: z.string(),
        brawler: z.object({
          id: z.number(),
          name: z.string(),
          power: z.number(),
          trophies: z.number(),
        }),
      })).optional(),
    }),
  })),
});

// Brawler schemas
export const BrawlerSchema = z.object({
  id: z.number(),
  name: z.string(),
  starPowers: z.array(z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().optional(),
  })),
  gadgets: z.array(z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().optional(),
  })),
});

export const BrawlersListSchema = z.object({
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    starPowers: z.array(z.object({
      id: z.number(),
      name: z.string(),
      description: z.string().optional(),
    })),
    gadgets: z.array(z.object({
      id: z.number(),
      name: z.string(),
      description: z.string().optional(),
    })),
  })),
});

// Club schemas
export const ClubSchema = z.object({
  tag: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  badgeId: z.number(),
  requiredTrophies: z.number(),
  trophies: z.number(),
  members: z.array(z.object({
    tag: z.string(),
    name: z.string(),
    nameColor: z.string().optional(),
    role: z.string(),
    trophies: z.number(),
    icon: z.object({
      id: z.number(),
    }),
  })),
});

export const ClubMembersSchema = z.object({
  items: z.array(z.object({
    tag: z.string(),
    name: z.string(),
    nameColor: z.string().optional(),
    role: z.string(),
    trophies: z.number(),
    icon: z.object({
      id: z.number(),
    }),
  })),
});

// Event schemas
export const EventsSchema = z.object({
  current: z.array(z.object({
    id: z.number(),
    mode: z.string(),
    map: z.string(),
    startTime: z.string(),
    endTime: z.string(),
  })),
  upcoming: z.array(z.object({
    id: z.number(),
    mode: z.string(),
    map: z.string(),
    startTime: z.string(),
    endTime: z.string(),
  })),
});

// Map schemas
export const MapsSchema = z.object({
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    hash: z.string(),
    version: z.string(),
    link: z.string(),
    imageUrl: z.string(),
    credit: z.string().optional(),
    environment: z.object({
      id: z.number(),
      name: z.string(),
      hash: z.string(),
      path: z.string(),
      version: z.string(),
    }),
    gameMode: z.object({
      id: z.number(),
      name: z.string(),
      hash: z.string(),
      version: z.string(),
      color: z.string(),
      bgColor: z.string(),
      title: z.string(),
      titleColor: z.string(),
      description: z.string(),
      descriptionColor: z.string(),
      link: z.string(),
      imageUrl: z.string(),
      imageUrl2: z.string(),
    }),
  })),
});

// Game mode schemas
export const GameModesSchema = z.object({
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    hash: z.string(),
    version: z.string(),
    color: z.string(),
    bgColor: z.string(),
    title: z.string(),
    titleColor: z.string(),
    description: z.string(),
    descriptionColor: z.string(),
    link: z.string(),
    imageUrl: z.string(),
    imageUrl2: z.string(),
  })),
}); 