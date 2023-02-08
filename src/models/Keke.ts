import { TModel, TModelCreator } from "models/types";

export const getKeke: TModelCreator = (
  coordinates = { x: 0, y: 0 }
): TModel => {
  return {
    id: crypto.randomUUID(),
    name: "weke",
    coordinates,
  };
};
