import { ACTIONS, MODELS_NAMES } from "models/models";
import { getActionBlock } from "models/builder/builder";
import { TModelCreator } from "models/builder/types";
import { TActionBlock } from "models/types";

export const getPushBlock: TModelCreator = (): TActionBlock =>
  getActionBlock({
    name: MODELS_NAMES.push,
    icon: "push",
    actionProps: {
      action: ACTIONS.isPush,
    },
  });
