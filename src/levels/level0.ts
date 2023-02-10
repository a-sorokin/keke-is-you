import { MODELS_NAMES } from "models/models";
import { TLevelConfig } from "levels/types";
import { getCoordinatesByRange } from "levels/utils";

const levelConfig: TLevelConfig = {
  field: {
    sizeX: 19,
    sizeY: 10,
  },
  materialObjects: [
    {
      name: MODELS_NAMES.keke,
      coordinates: [[5, 5]],
      props: {
        isYou: true,
      },
    },
    {
      name: MODELS_NAMES.wall,
      coordinates: [
        ...getCoordinatesByRange([4, 16], [3]),
        ...getCoordinatesByRange([4, 16], [8]),
      ],
      props: {
        isStop: true,
      },
    },
    {
      name: MODELS_NAMES.rock,
      coordinates: getCoordinatesByRange([10], [4, 7]),
      props: {
        isPush: true,
      },
    },
  ],
};

export default levelConfig;
