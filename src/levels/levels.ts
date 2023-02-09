import { TLevelConfig } from "levels/types";
import level0 from "levels/level0";

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
];
