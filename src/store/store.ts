import { create } from "zustand";
import { TField, TFieldConfig } from "levels/types";
import { createFieldWithObjects, getLevelData } from "levels/initLevel";
import { levels } from "levels/levels";
import { TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { initMoveController } from "engine/moveController/moveController";
import { moveObjects } from "engine/movements";
import { checkWin } from "engine/checkWin";

interface TState {
  isMoveControllerInit: boolean;
  fieldSize: TFieldConfig;
  field: TField;
  materialObjects: TMaterialObjects;
  isWin: boolean;

  initMoveController: () => void;
  initLevel: (id: string) => void;
  moveObjects: (direction: string) => void;
  updateField: (materialObjects: TMaterialObjects) => void;
  checkWin: () => void;
}

export const useGameStore = create<TState>((set, get) => ({
  isMoveControllerInit: false,
  fieldSize: {} as TFieldConfig,
  field: {},
  materialObjects: [],
  isWin: false,

  initMoveController: () => {
    initMoveController(get().moveObjects);
    set({ isMoveControllerInit: true });
  },
  initLevel: (id: string) => {
    const { isMoveControllerInit, initMoveController } = get();
    if (!isMoveControllerInit) initMoveController();

    const lvl = levels.find((level) => level.id === id);
    if (!lvl) return;
    const { field, materialObjects } = getLevelData(lvl.config);

    set({ field, materialObjects, fieldSize: lvl.config.field, isWin: false });
  },
  moveObjects: (direction: TDirection) => {
    const { materialObjects, fieldSize, field, isWin } = get();
    if (isWin) return;
    moveObjects(direction, materialObjects, fieldSize, field);
    get().updateField(materialObjects);
  },
  updateField: (materialObjects: TMaterialObjects) => {
    const { fieldSize } = get();
    const updatedField = createFieldWithObjects(fieldSize, materialObjects);
    set({ field: updatedField });
    get().checkWin();
  },
  checkWin: () => {
    const { materialObjects, field } = get();
    const isWin = checkWin(materialObjects, field);
    if (isWin) set({ isWin });
  },
}));
