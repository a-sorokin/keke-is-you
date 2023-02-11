import {
  TActionBlock,
  TActionValue,
  TLogicBlock,
  TMaterialObject,
  TModelNameValue,
  TWordBlock,
  TWordsValue,
} from "models/types";
import { M_OBJECT_TYPES } from "models/models";

type TProps = {
  name: TModelNameValue;
  icon: string;
  wordProps?: {
    word: TWordsValue;
  };
  actionProps?: {
    action: TActionValue;
  };
};

const getMaterialObject = (
  props: any
): TMaterialObject & TLogicBlock & TWordBlock & TActionBlock => ({
  props: {},
  id: crypto.randomUUID(),
  coordinates: "1,1",
  ...props,
});

export const getSimpleObject = (props: TProps): TMaterialObject => {
  return getMaterialObject({
    type: M_OBJECT_TYPES.simple,
    ...props,
  });
};

export const getLogicBlock = (props: TProps): TLogicBlock =>
  getMaterialObject({
    type: M_OBJECT_TYPES.logic,
    props: { isPush: true },
    logicProps: {},
    ...props,
  });

export const getWordBlock = (props: TProps): TWordBlock =>
  getMaterialObject({
    type: M_OBJECT_TYPES.word,
    props: { isPush: true },
    ...props,
  });

export const getActionBlock = (props: TProps): TActionBlock =>
  getMaterialObject({
    props: { isPush: true },
    type: M_OBJECT_TYPES.action,
    ...props,
  });
