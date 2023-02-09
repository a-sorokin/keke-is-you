import { TMaterialObjects, TModelName } from "models/types";
import { MODELS_NAMES } from "models/models";

export type TFieldConfig = {
  sizeX: number;
  sizeY: number;
};

export type TObjectConfig = {
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: number[][];
  props?: {
    isYou?: boolean;
  };
};

export type TLevelConfig = {
  field: TFieldConfig;
  materialObjects: TObjectConfig[];
};

export type TField = {
  [key: string]: TMaterialObjects;
};
