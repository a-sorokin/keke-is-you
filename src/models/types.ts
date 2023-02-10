import { MODELS_NAMES } from "models/models";

export type TMaterialObject = {
  id: string;
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: `${number},${number}`;
  icon?: string;
  isYou?: boolean;
  isStop?: boolean;
};

export type TMaterialObjects = TMaterialObject[];

export type TModelName = keyof typeof MODELS_NAMES;

export type TModelCreator = (coordinates: {
  x: number;
  y: number;
}) => TMaterialObject;

export type TModels = {
  [key: (typeof MODELS_NAMES)[TModelName]]: TModelCreator;
};
