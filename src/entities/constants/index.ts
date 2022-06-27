import { GridType } from "../types";

export const CARDINAL_POINTS: string[] = ["N", "E", "S", "W"];

export const COMMANDS: { [key: string]: number } = { L: -1, F: 0, R: 1 };

export const GRID_MIN: GridType = { width: 0, length: 0 };

export const GRID_MAX: GridType = { width: 50, length: 50 };
