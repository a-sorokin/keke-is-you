import { TModelName } from "models/types";
import { MODELS_NAMES } from "models/models";

export type TFieldConfig = {
  sizeX: number;
  sizeY: number;
};

export type TMaterialObject = {
  id: string;
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: { x: number; y: number };
};

export type TMaterialObjects = TMaterialObject[];

export type TObjectConfig = {
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: number[][];
};

export type TLevelConfig = {
  field: TFieldConfig;
  materialObjects: TObjectConfig[];
};

export type TField = {
  [key: string]: TMaterialObjects;
};
