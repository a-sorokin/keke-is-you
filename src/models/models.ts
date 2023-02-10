import { getKeke } from "models/Keke";
import { getWall } from "models/Wall";
import { getRock } from "models/Rock";
import { TMaterialObject, TModels } from "models/types";
import { getFlag } from "models/Flag";

export const MODELS_NAMES = {
  keke: "keke",
  flag: "flag",
  wall: "wall",
  rock: "rock",
};

export const models: TModels = {
  keke: getKeke,
  flag: getFlag,
  wall: getWall,
  rock: getRock,
};

export const modelCreator = (baseObject: TMaterialObject, props: any) => {
  return {
    ...baseObject,
    ...props,
  };
};
