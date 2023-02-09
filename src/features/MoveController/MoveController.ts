import { ARROWS, DIRECTIONS } from "features/MoveController/directions";
import { TDirection } from "features/MoveController/types";
import { TFieldConfig } from "levels/types";
import { TMaterialObject, TMaterialObjects } from "models/types";

export const initMoveController = (
  moveCallback: (direction: TDirection) => void
) => {
  const keyActions = {
    [ARROWS.ArrowRight]: () => moveCallback(DIRECTIONS.right),
    [ARROWS.ArrowLeft]: () => moveCallback(DIRECTIONS.left),
    [ARROWS.ArrowUp]: () => moveCallback(DIRECTIONS.up),
    [ARROWS.ArrowDown]: () => moveCallback(DIRECTIONS.down),
  };

  window.onkeydown = (event) => {
    const action = keyActions[event.key];
    if (action) action();
  };
};

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
