import { MODELS_NAMES } from "models/models";
import { TLevelConfig } from "levels/types";
import { getCoordinatesByRange } from "levels/utils";

const mainObjects = [
  {
    name: MODELS_NAMES.keke,
    coordinates: [[5, 5]],
  },
  {
    name: MODELS_NAMES.flag,
    coordinates: [[15, 5]],
  },
  {
    name: MODELS_NAMES.wall,
    coordinates: [
      ...getCoordinatesByRange([4, 16], [3]),
      ...getCoordinatesByRange([4, 16], [7]),
    ],
  },
  {
    name: MODELS_NAMES.rock,
    coordinates: getCoordinatesByRange([10], [4, 6]),
  },
];

const keke = [
  {
    name: MODELS_NAMES.kekeWord,
    coordinates: [[2, 11]],
  },
  {
    name: MODELS_NAMES.is,
    coordinates: [[3, 11]],
  },
  {
    name: MODELS_NAMES.you,
    coordinates: [[4, 11]],
  },
];

const rock = [
  {
    name: MODELS_NAMES.rockWord,
    coordinates: [[6, 11]],
  },
  {
    name: MODELS_NAMES.is,
    coordinates: [[7, 11]],
  },
  {
    name: MODELS_NAMES.push,
    coordinates: [[8, 11]],
  },
];

const wall = [
  {
    name: MODELS_NAMES.wallWord,
    coordinates: [[10, 11]],
  },
  {
    name: MODELS_NAMES.is,
    coordinates: [[11, 11]],
  },
  {
    name: MODELS_NAMES.stop,
    coordinates: [[12, 11]],
  },
];

const win = [
  {
    name: MODELS_NAMES.flagWord,
    coordinates: [[14, 11]],
  },
  {
    name: MODELS_NAMES.is,
    coordinates: [[15, 11]],
  },
  {
    name: MODELS_NAMES.win,
    coordinates: [[16, 11]],
  },
];

const levelConfig: TLevelConfig = {
  field: {
    sizeX: 19,
    sizeY: 12,
  },
  materialObjects: [...mainObjects, ...keke, ...rock, ...wall, ...win],
};

export default levelConfig;
