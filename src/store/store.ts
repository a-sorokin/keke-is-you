import { create } from "zustand";
import { TField, TFieldConfig } from "levels/types";
import { createFieldWithObjects, getLevelData } from "levels/initLevel";
import { levels } from "levels/levels";
import { TLogicBlock, TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { initMoveController } from "engine/moveController/moveController";
import { moveObjects } from "engine/movements";
import { checkWin } from "engine/checkWin";
import { checkRules } from "engine/rules";

interface TState {
  isMoveControllerInit: boolean;
  fieldSize: TFieldConfig;
  field: TField;
  materialObjects: TMaterialObjects;
  logicBlocks: TLogicBlock[];
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
  logicBlocks: [],
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
    const { field, materialObjects, logicBlocks } = getLevelData(lvl.config);

    checkRules(field, materialObjects, logicBlocks);

    set({
      field,
      materialObjects,
      fieldSize: lvl.config.field,
      isWin: false,
      logicBlocks,
    });
  },

  moveObjects: (direction: TDirection) => {
    const { materialObjects, fieldSize, field, isWin } = get();
    if (isWin) return;
    moveObjects(direction, materialObjects, fieldSize, field);
    get().updateField(materialObjects);
  },

  updateField: (materialObjects: TMaterialObjects) => {
    const { fieldSize, logicBlocks } = get();
    const updatedField = createFieldWithObjects(fieldSize, materialObjects);
    checkRules(updatedField, materialObjects, logicBlocks);
    set({ field: updatedField });
    get().checkWin();
  },

  checkWin: () => {
    const { materialObjects, field } = get();
    const isWin = checkWin(materialObjects, field);
    if (isWin) set({ isWin });
  },
}));
