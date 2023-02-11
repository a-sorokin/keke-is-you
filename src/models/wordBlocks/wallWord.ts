import { MODELS_NAMES, WORDS } from "models/models";
import { getWordBlock } from "models/builder/builder";
import { TModelCreator } from "models/builder/types";
import { TWordBlock } from "models/types";

export const getWallWordBlock: TModelCreator = (): TWordBlock => {
  return getWordBlock({
    name: MODELS_NAMES.wallWord,
    icon: "'🌵'",
    wordProps: {
      word: WORDS.wallWord,
    },
  });
};
