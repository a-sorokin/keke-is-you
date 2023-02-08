import create from "zustand";

interface TState {}

export const useAppStore = create<TState>((set, get) => ({}));
