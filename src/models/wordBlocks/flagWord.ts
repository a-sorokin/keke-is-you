import { TWordBlock } from "models/types";
import { MODELS_NAMES, WORDS } from "models/models";
import { getWordBlock } from "models/builder/builder";
import { TModelCreator } from "models/builder/types";

export const getFlagWordBlock: TModelCreator = (): TWordBlock => {
  return getWordBlock({
    name: MODELS_NAMES.flagWord,
    icon: "'⭐'",
    wordProps: {
      word: WORDS.flagWord,
    },
  });
};
