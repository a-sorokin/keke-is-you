import { TMaterialObjects, TModelName } from "models/types";
import { MODELS_NAMES } from "models/models";
import { TDirection } from "engine/moveController/types";

export type TFieldConfig = {
  sizeX: number;
  sizeY: number;
};

export type TObjectConfig = {
  name: (typeof MODELS_NAMES)[TModelName];
  coordinates: number[][];
  props?: {
    isYou?: boolean;
    isStop?: boolean;
    isPush?: boolean;
    isWin?: boolean;
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
