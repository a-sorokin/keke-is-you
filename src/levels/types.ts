import { TActionValue, TMaterialObjects, TModelNameValue } from "models/types";
import { TDirection } from "engine/moveController/types";
import { LEVELS_ID } from "levels/levels";

export type TLevel = {
  id: TLevelId;
  name: string;
  description: string;
  config: TLevelConfig;
};

export type TLevels = TLevel[];

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

export type TLevelId = (typeof LEVELS_ID)[keyof typeof LEVELS_ID];
