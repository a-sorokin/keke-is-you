import { MODELS_NAMES, WORDS } from "models/models";
import { TModelCreator } from "models/builder/types";
import { TWordBlock } from "models/types";
import { getWordBlock } from "models/builder/builder";

export const getRockWordBlock: TModelCreator = (): TWordBlock => {
  return getWordBlock({
    name: MODELS_NAMES.rockWord,
    icon: "'🪨'",
    wordProps: {
      word: WORDS.rockWord,
    },
  });
};
