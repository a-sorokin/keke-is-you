import { DIRECTIONS } from "features/MoveController/directions";

export type TDirection = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
