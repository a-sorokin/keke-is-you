import { DIRECTIONS } from "engine/constants";
import { TMaterialObject, TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { TFieldConfig } from "levels/types";

const moveActions = {
  [DIRECTIONS.right]: (obj: TMaterialObject) => ({
    x: obj.coordinates.x + 1,
    y: obj.coordinates.y,
  }),
  [DIRECTIONS.left]: (obj: TMaterialObject) => ({
    x: obj.coordinates.x - 1,
    y: obj.coordinates.y,
  }),
  [DIRECTIONS.up]: (obj: TMaterialObject) => ({
    x: obj.coordinates.x,
    y: obj.coordinates.y - 1,
  }),
  [DIRECTIONS.down]: (obj: TMaterialObject) => ({
    x: obj.coordinates.x,
    y: obj.coordinates.y + 1,
  }),
};

export const moveObjects = (
  direction: TDirection,
  materialObjects: TMaterialObjects,
  fieldSize: TFieldConfig
) => {
  const { sizeX, sizeY } = fieldSize;

  materialObjects.forEach((obj) => {
    if (!obj.isYou) return;
    const newCoordinates = moveActions[direction](obj);

    if (
      newCoordinates.x < 1 ||
      newCoordinates.y < 1 ||
      newCoordinates.x > sizeX ||
      newCoordinates.y > sizeY
    ) {
      return;
    }

    obj.coordinates = newCoordinates;
  });
};
