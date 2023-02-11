import { MODELS_NAMES, WORDS } from "models/models";
import { getWordBlock } from "models/builder/builder";
import { TModelCreator } from "models/builder/types";
import { TWordBlock } from "models/types";

export const getKekeWordBlock: TModelCreator = (): TWordBlock => {
  return getWordBlock({
    name: MODELS_NAMES.kekeWord,
    icon: "'🐥'",
    wordProps: {
      word: WORDS.kekeWord,
    },
  });
};
