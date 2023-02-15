import level0 from "levels/levelsConfigs/level0";
import level1 from "levels/levelsConfigs/level1";
import { TLevels } from "levels/types";

export const LEVELS_ID = {
  level0: "0",
  level1: "1",
};

export const levels: TLevels = [
  {
    id: LEVELS_ID.level0,
    name: "Level 0",
    description: "Level 0 description",
    config: level0,
  },
  {
    id: LEVELS_ID.level1,
    name: "Level 1",
    description: "Level 1 description",
    config: level1,
  },
];
