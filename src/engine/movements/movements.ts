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

const isInField = (
  { sizeX, sizeY }: TFieldConfig,
  { x, y }: { x: number; y: number }
): boolean => !(x < 1 || y < 1 || x > sizeX || y > sizeY);

export const moveObjects = (
  direction: TDirection,
  materialObjects: TMaterialObjects,
  fieldSize: TFieldConfig
) => {
  materialObjects.forEach((obj) => {
    if (!obj.isYou) return;
    const newCoordinates = moveActions[direction](obj);

    if (isInField(fieldSize, newCoordinates)) {
      obj.coordinates = newCoordinates;
    }
  });
};
