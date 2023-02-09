import { TModel, TModelCreator } from "models/types";
import { MODELS_NAMES } from "models/models";

export const getRock: TModelCreator = (
  coordinates = { x: 0, y: 0 }
): TModel => {
  return {
    id: crypto.randomUUID(),
    name: MODELS_NAMES.rock,
    coordinates,
  };
};
