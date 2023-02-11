import { TLogicBlock } from "models/types";
import { MODELS_NAMES } from "models/models";
import { getLogicBlock } from "models/builder/builder";
import { TModelCreator } from "models/builder/types";

export const getIsBlock: TModelCreator = (): TLogicBlock =>
  getLogicBlock({
    name: MODELS_NAMES.is,
    icon: "is",
  });
