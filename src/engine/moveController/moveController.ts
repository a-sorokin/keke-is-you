import { TDirection } from "engine/moveController/types";
import { ARROWS, DIRECTIONS, KEYBOARDS_BUTTONS } from "engine/constants";

export const initMoveController = (
  moveCallback: (direction: TDirection) => void,
  undoCallback: () => void
) => {
  const keyActions = {
    [ARROWS.ArrowRight]: () => moveCallback(DIRECTIONS.right),
    [ARROWS.ArrowLeft]: () => moveCallback(DIRECTIONS.left),
    [ARROWS.ArrowUp]: () => moveCallback(DIRECTIONS.up),
    [ARROWS.ArrowDown]: () => moveCallback(DIRECTIONS.down),
    [KEYBOARDS_BUTTONS.z]: () => undoCallback(),
  };

  window.onkeydown = (event) => {
    const action = keyActions[event.key];
    if (action) action();
  };
};
