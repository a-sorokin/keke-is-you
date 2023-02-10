import { TModelCreator } from "models/types";
import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "models/types";

export const getFlag: TModelCreator = (coordinates): TMaterialObject => {
  return {
    id: crypto.randomUUID(),
    name: MODELS_NAMES.flag,
    coordinates: `${coordinates.x},${coordinates.y}`,
    icon: "⭐",
  };
};
