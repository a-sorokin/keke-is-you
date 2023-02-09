import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "levels/types";

export type TModelName = keyof typeof MODELS_NAMES;

export type TModelCreator = (coordinates?: {
  x: number;
  y: number;
}) => TMaterialObject;

export type TModels = {
  [key: (typeof MODELS_NAMES)[TModelName]]: TModelCreator;
};
