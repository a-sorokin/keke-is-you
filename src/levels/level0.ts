// 0 level
import { MODELS_NAMES } from "models/models";
import { TLevelConfig } from "levels/types";

export const levelConfig: TLevelConfig = {
  field: {
    sizeX: 19,
    sizeY: 10,
  },
  materialObjects: [
    {
      name: MODELS_NAMES.keke,
      x: [5],
      y: [5],
    },
    {
      name: MODELS_NAMES.wall,
      x: [3, 16],
      y: [3],
    },
    {
      name: MODELS_NAMES.wall,
      x: [10],
      y: [3, 7],
    },
  ],
};
