import { create } from "zustand";
import { TField, TFieldConfig } from "levels/types";
import { getLevelData } from "levels/initLevel";
import { levels } from "levels/levels";
import { TMaterialObjects } from "models/types";

interface TState {
  fieldSize: TFieldConfig;
  field: TField;
  materialObjects: TMaterialObjects;

  initLevel: (id: string) => void;
}

export const useAppStore = create<TState>((set, get) => ({
  fieldSize: {} as TFieldConfig,
  field: {},
  materialObjects: [],

  initLevel: (id: string) => {
    const lvl = levels.find((level) => level.id === id);
    if (!lvl) return;
    const { field, materialObjects } = getLevelData(lvl.config);
    set({ field, materialObjects, fieldSize: lvl.config.field });
  },
}));
