import { create } from "zustand";
import { TField, TFieldConfig } from "levels/types";
import { createFieldWithObjects, getLevelData } from "levels/initLevel";
import { levels } from "levels/levels";
import { TMaterialObjects } from "models/types";
import { TDirection } from "features/MoveController/types";
import {
  initMoveController,
  moveObjects,
} from "features/MoveController/MoveController";

interface TState {
  isMoveControllerInit: boolean;
  fieldSize: TFieldConfig;
  field: TField;
  materialObjects: TMaterialObjects;

  initMoveController: () => void;
  initLevel: (id: string) => void;
  moveObjects: (direction: string) => void;
  updateField: (materialObjects: TMaterialObjects) => void;
}

export const useGameStore = create<TState>((set, get) => ({
  isMoveControllerInit: false,
  fieldSize: {} as TFieldConfig,
  field: {},
  materialObjects: [],

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

    set({ field, materialObjects, fieldSize: lvl.config.field });
  },
  moveObjects: (direction: TDirection) => {
    const { materialObjects, fieldSize } = get();
    moveObjects(direction, materialObjects, fieldSize);
    get().updateField(materialObjects);
  },
  updateField: (materialObjects: TMaterialObjects) => {
    const { fieldSize } = get();
    const newField = createFieldWithObjects(fieldSize, materialObjects);
    set({ field: newField });
  },
}));
