import { TModelName } from "models/types";
import { MODELS_NAMES } from "models/models";

export type TFieldConfig = {
  sizeX: number;
  sizeY: number;
};

export type TMaterialObjects = {
  name: (typeof MODELS_NAMES)[TModelName];
  x: number[];
  y: number[];
}[];

export type TLevelConfig = {
  field: TFieldConfig;
  materialObjects: TMaterialObjects;
};

export type TField = {
  [key: string]: any[];
};
