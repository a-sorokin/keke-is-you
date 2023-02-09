import { TLevelConfig } from "levels/types";
import level0 from "levels/level0";
import level1 from "levels/level1";

export type TLevel = {
  id: string;
  name: string;
  description: string;
  config: TLevelConfig;
};

export type TLevels = TLevel[];

export const levels: TLevels = [
  {
    id: "0",
    name: "Level 0",
    description: "Level 0 description",
    config: level0,
  },
  {
    id: "1",
    name: "Level 1",
    description: "Level 1 description",
    config: level1,
  },
];
