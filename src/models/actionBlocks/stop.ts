import { TModelCreator } from "models/builder/types";
import { TActionBlock } from "models/types";
import { ACTIONS, MODELS_NAMES } from "models/models";
import { getActionBlock } from "models/builder/builder";

export const getStopBlock: TModelCreator = (): TActionBlock =>
  getActionBlock({
    name: MODELS_NAMES.stop,
    icon: "stop",
    actionProps: {
      action: ACTIONS.isStop,
    },
  });
