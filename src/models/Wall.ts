import { TModelCreator } from "models/types";
import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "models/types";

export const getWall: TModelCreator = (
  coordinates = { x: 0, y: 0 }
): TMaterialObject => {
  return {
    id: crypto.randomUUID(),
    name: MODELS_NAMES.wall,
    coordinates,
  };
};
