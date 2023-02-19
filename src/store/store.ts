import { create } from "zustand";
import { TField, TFieldConfig, TLevelId } from "levels/types";
import { createFieldWithObjects, getLevelData } from "levels/initLevel";
import { levels } from "levels/levels";
import { TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { initMoveController } from "engine/moveController/moveController";
import { moveObjects } from "engine/movements";
import { checkWin } from "engine/checkWin";
import { checkRules } from "engine/rules";
import { THistory, TStateLogicBlocks } from "store/types";

interface IGameStore {
  levelId: string;
  isMoveControllerInit: boolean;
  fieldSize: TFieldConfig;
  field: TField;
  materialObjects: TMaterialObjects;
  logicBlocks: TStateLogicBlocks;
  isWin: boolean;
  history: THistory;
  isYouHere: boolean;

  initMoveController: () => void;
  initLevel: (id: string) => void;
  moveObjects: (direction: string) => void;
  updateField: (materialObjects: TMaterialObjects) => void;
  checkWin: () => void;
  addToHistory: () => void;
  undoHistory: () => void;
  checkIsYouHere: () => void;
  restartLevel: () => void;
}

export const useGameStore = create<IGameStore>((set, get) => ({
  levelId: "",
  isMoveControllerInit: false,
  fieldSize: {} as TFieldConfig,
  field: {},
  materialObjects: [],
  logicBlocks: [],
  isWin: false,
  history: [],
  isYouHere: true,

  initMoveController: () => {
    const { moveObjects, undoHistory, restartLevel } = get();
    initMoveController(moveObjects, undoHistory, restartLevel);
    set({ isMoveControllerInit: true });
  },

  initLevel: (id: TLevelId) => {
    const { isMoveControllerInit, initMoveController, addToHistory } = get();
    if (!isMoveControllerInit) initMoveController();

    const lvl = levels.find((level) => level.id === id);
    if (!lvl) return;
    const { field, materialObjects, logicBlocks } = getLevelData(lvl.config);

    checkRules(field, materialObjects, logicBlocks);
    set({
      levelId: id,
      field,
      materialObjects,
      fieldSize: lvl.config.field,
      isWin: false,
      logicBlocks,
      history: [],
      isYouHere: true,
    });
    addToHistory();
  },

  moveObjects: (direction: TDirection) => {
    if (get().isWin) return;
    const { materialObjects, fieldSize, field, addToHistory, updateField } =
      get();
    moveObjects(direction, materialObjects, fieldSize, field);
    updateField(materialObjects);
    addToHistory();
  },

  updateField: (materialObjects: TMaterialObjects) => {
    const { fieldSize, logicBlocks, checkWin } = get();
    const { updatedField, isYouHere } = createFieldWithObjects(
      fieldSize,
      materialObjects
    );
    set({ field: updatedField, isYouHere });
    checkRules(updatedField, materialObjects, logicBlocks);
    checkWin();
  },

  checkWin: () => {
    const { materialObjects, field } = get();
    const isWin = checkWin(materialObjects, field);
    if (isWin) set({ isWin });
  },

  addToHistory: () => {
    const { materialObjects, history, checkIsYouHere } = get();
    const newHistoryItem = JSON.stringify(materialObjects);
    if (history.at(-1) === newHistoryItem) {
      return checkIsYouHere();
    }
    history.push(JSON.stringify(materialObjects));
    set({ history });
  },

  undoHistory: () => {
    const { isWin, history, updateField } = get();
    if (isWin || !history.length || history.length === 1) return;

    history.pop();
    const lastHistoryItem = history[history.length - 1];
    const lastObjectsFromHistory = JSON.parse(lastHistoryItem);
    set({ history, materialObjects: lastObjectsFromHistory });
    updateField(lastObjectsFromHistory);
  },

  checkIsYouHere: () => {
    const isYouHereNow = get().materialObjects.some((obj) => obj.props.isYou);
    set({ isYouHere: isYouHereNow });
  },

  restartLevel: () => {
    const { levelId, initLevel } = get();
    initLevel(levelId);
  },
}));
