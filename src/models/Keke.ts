import { TModelCreator } from "models/types";
import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "models/types";

export const getKeke: TModelCreator = (coordinates): TMaterialObject => {
  return {
    id: crypto.randomUUID(),
    name: MODELS_NAMES.keke,
    coordinates: `${coordinates.x},${coordinates.y}`,
    icon: "🐥",
  };
};
