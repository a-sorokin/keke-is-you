import { TModelCreator } from "models/types";
import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "models/types";

export const getRock: TModelCreator = (coordinates): TMaterialObject => {
  return {
    id: crypto.randomUUID(),
    name: MODELS_NAMES.rock,
    coordinates: `${coordinates.x},${coordinates.y}`,
    icon: "🪨",
  };
};
