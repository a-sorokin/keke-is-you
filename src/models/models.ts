import { getKeke } from "models/objects/Keke";
import { getWall } from "models/objects/Wall";
import { getRock } from "models/objects/Rock";
import { TModels } from "models/types";
import { getFlag } from "models/objects/Flag";
import { getStopBlock } from "models/actionBlocks/stop";
import { getIsBlock } from "models/logicBlocks/is";
import { getWinBlock } from "models/actionBlocks/win";
import { getYouBlock } from "models/actionBlocks/you";
import { getKekeWordBlock } from "models/wordBlocks/kekeWord";
import { getFlagWordBlock } from "models/wordBlocks/flagWord";
import { getPushBlock } from "models/actionBlocks/push";
import { getWallWordBlock } from "models/wordBlocks/wallWord";
import { getRockWordBlock } from "models/wordBlocks/rockWord";

export const WORDS = {
  you: "you",
  win: "win",
  is: "is",
  stop: "stop",
  push: "push",
  kekeWord: "kekeWord",
  flagWord: "flagWord",
  wallWord: "wallWord",
  rockWord: "rockWord",
};

export const MODELS_NAMES = {
  ...WORDS,
  keke: "keke",
  flag: "flag",
  wall: "wall",
  rock: "rock",
};

export const MODELS_WORDS_RELATIONS = {
  [WORDS.kekeWord]: MODELS_NAMES.keke,
  [WORDS.flagWord]: MODELS_NAMES.flag,
  [WORDS.wallWord]: MODELS_NAMES.wall,
  [WORDS.rockWord]: MODELS_NAMES.rock,
};

export const models: TModels = {
  keke: getKeke,
  flag: getFlag,
  wall: getWall,
  rock: getRock,
  you: getYouBlock,
  win: getWinBlock,
  is: getIsBlock,
  stop: getStopBlock,
  push: getPushBlock,
  kekeWord: getKekeWordBlock,
  flagWord: getFlagWordBlock,
  wallWord: getWallWordBlock,
  rockWord: getRockWordBlock,
};

export const ACTIONS = {
  isWin: "isWin",
  isStop: "isStop",
  isPush: "isPush",
  isYou: "isYou",
  replace: "replace",
};

export const M_OBJECT_TYPES = {
  word: "word",
  action: "action",
  logic: "logic",
  simple: "simple",
};
