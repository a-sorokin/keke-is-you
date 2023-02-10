import { TDirection } from "engine/moveController/types";
import { ARROWS, DIRECTIONS } from "engine/constants";

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
