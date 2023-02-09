import { create } from "zustand";
import { TFieldConfig } from "levels/types";

interface TState {
  field: TFieldConfig | {};

  initLevel: (id: string) => void;
}

export const useAppStore = create<TState>((set, get) => ({
  field: {},

  initLevel: (id: string) => {
    console.log("initLevel", id);
  },
}));
