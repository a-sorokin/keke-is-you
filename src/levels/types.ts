import { TActionValue, TMaterialObjects, TModelNameValue } from "models/types";
import { TDirection } from "engine/moveController/types";

export type TFieldConfig = {
  sizeX: number;
  sizeY: number;
};

export type TObjectConfig = {
  name: TModelNameValue;
  coordinates: number[][];
  props?: {
    [key: TActionValue]: boolean | unknown;
  };
};

export type TLevelConfig = {
  field: TFieldConfig;
  materialObjects: TObjectConfig[];
};

export type TCoordinates = `${number},${number}`;

export type TCell = {
  id: TCoordinates;
  adjoiningCells: {
    [key: TDirection]: TCell | null;
  };
  materialObjects: TMaterialObjects;
};

export type TField = {
  [key: string]: TCell;
};
