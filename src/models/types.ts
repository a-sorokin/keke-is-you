import { MODELS_NAMES } from "models/models";

export type TModel = {
  id: string;
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: { x: number; y: number };
};

export type TModelName = keyof typeof MODELS_NAMES;

export type TModelCreator = (coordinates?: { x: number; y: number }) => TModel;

export type TModels = {
  [key: (typeof MODELS_NAMES)[TModelName]]: TModelCreator;
};
