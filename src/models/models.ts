import { getKeke } from "models/Keke";
import { getWall } from "models/Wall";
import { getRock } from "models/Rock";
import { TModels } from "models/types";

export const MODELS_NAMES = {
  keke: "keke",
  wall: "wall",
  rock: "rock",
};

export const models: TModels = {
  keke: getKeke,
  wall: getWall,
  rock: getRock,
};
