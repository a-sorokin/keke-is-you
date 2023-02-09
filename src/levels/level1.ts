import { MODELS_NAMES } from "models/models";
import { TLevelConfig } from "levels/types";
import { getCoordinatesByRange } from "levels/utils";

const levelConfig: TLevelConfig = {
  field: {
    sizeX: 15,
    sizeY: 7,
  },
  materialObjects: [
    {
      name: MODELS_NAMES.keke,
      coordinates: [
        ...getCoordinatesByRange([3, 10], [3]),
        ...getCoordinatesByRange([3, 12], [4]),
      ],
    },
    {
      name: MODELS_NAMES.wall,
      coordinates: [[14, 7]],
      props: {
        isYou: true,
      },
    },
    {
      name: MODELS_NAMES.rock,
      coordinates: getCoordinatesByRange([5], [5, 7]),
    },
  ],
};

export default levelConfig;
