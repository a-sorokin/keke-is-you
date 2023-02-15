import { ACTIONS, M_OBJECT_TYPES, MODELS_NAMES, WORDS } from "models/models";
import { TCoordinates } from "levels/types";
import { TModelCreator } from "models/builder/types";

export type TAction = keyof typeof ACTIONS;
export type TActionValue = (typeof ACTIONS)[TAction];

export type TMaterialObjectTypes = keyof typeof M_OBJECT_TYPES;
export type TMaterialObjectTypesValues =
  (typeof M_OBJECT_TYPES)[TMaterialObjectTypes];

export type TMaterialObjectProps = {
  [key: TActionValue]: boolean;
};

export type TMaterialObject = {
  id: string;
  name: TModelNameValue;
  coordinates: TCoordinates;
  icon: string;
  type: TMaterialObjectTypesValues;

  // dirty fix
  wordProps?: { word: TWordsValue };
  actionProps?: { action: TActionValue };
  logicProps?: {};

  props: TMaterialObjectProps;
};

export type TWordBlock = TMaterialObject & {
  wordProps?: {
    word: TWordsValue;
  };
};

export type TActionBlock = TMaterialObject & {
  actionProps: {
    action: TActionValue;
  };
};

export type TLogicBlock = TMaterialObject & {
  logicProps?: {};
};

export type TMaterialObjects = (
  | TMaterialObject
  | TWordBlock
  | TActionBlock
  | TLogicBlock
)[];

export type TWords = keyof typeof WORDS;
export type TWordsValue = (typeof WORDS)[TWords];

export type TModelName = keyof typeof MODELS_NAMES;
export type TModelNameValue = (typeof MODELS_NAMES)[TModelName];

export type TModels = {
  [key: TModelNameValue]: TModelCreator;
};
