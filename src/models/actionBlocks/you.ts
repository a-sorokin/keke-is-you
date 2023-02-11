import { TModelCreator } from "models/builder/types";
import { TActionBlock } from "models/types";
import { ACTIONS, MODELS_NAMES } from "models/models";
import { getActionBlock } from "models/builder/builder";

export const getYouBlock: TModelCreator = (): TActionBlock =>
  getActionBlock({
    name: MODELS_NAMES.you,
    icon: "you",
    actionProps: {
      action: ACTIONS.isYou,
    },
  });
