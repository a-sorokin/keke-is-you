import { DIRECTIONS } from "engine/constants";

export type TDirection = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
