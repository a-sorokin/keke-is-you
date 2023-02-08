import { MODELS_NAMES } from "models/models";

export type TModel = {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
};

export type TModelName = keyof typeof MODELS_NAMES;

export type TModelCreator = (coordinates?: { x: number; y: number }) => TModel;

export type TModels = {
  [key: (typeof MODELS_NAMES)[TModelName]]: TModelCreator;
};
