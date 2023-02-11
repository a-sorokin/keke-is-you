import { TMaterialObject } from "models/types";
import { getSimpleObject } from "models/builder/builder";
import { MODELS_NAMES } from "models/models";

export const getKeke = (): TMaterialObject =>
  getSimpleObject({
    name: MODELS_NAMES.keke,
    icon: "🐥",
  });
