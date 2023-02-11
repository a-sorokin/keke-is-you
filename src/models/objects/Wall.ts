import { MODELS_NAMES } from "models/models";
import { TMaterialObject } from "models/types";
import { getSimpleObject } from "models/builder/builder";

export const getWall = (): TMaterialObject =>
  getSimpleObject({
    name: MODELS_NAMES.wall,
    icon: "🌵",
  });
