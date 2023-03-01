import { create } from "zustand";
import { TMaterialObjects } from "models/types";
import { TLevelId } from "levels/types";

interface IGlobalMapStore {
  viewPortSize: { x: number; y: number };
  materialObjects: TMaterialObjects;
  currentLevelId: TLevelId;
}

export const useGlobalMapStore = create<IGlobalMapStore>((set, get) => ({
  viewPortSize: { x: 0, y: 0 },
  materialObjects: [],
  currentLevelId: "",
}));
