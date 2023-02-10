import { TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { TCell, TField, TFieldConfig } from "levels/types";

const isStop = (targetCell: TCell): boolean => {
  return targetCell.materialObjects.some((o) => o.isStop);
};

const updateCells = (cell: TCell, targetCell: TCell, id: string) => {
  const objIndex = cell.materialObjects.findIndex((o) => o.id === id);
  const isolatedObj = cell.materialObjects.splice(objIndex, 1)[0];

  isolatedObj.coordinates = targetCell.id;
  targetCell.materialObjects.push(isolatedObj);
};

export const moveObjects = (
  direction: TDirection,
  materialObjects: TMaterialObjects,
  fieldSize: TFieldConfig,
  field: TField
): TField => {
  materialObjects.forEach((obj) => {
    if (!obj.isYou) return;

    const cell = field[obj.coordinates];
    const targetCell = cell.adjoiningCells[direction];

    if (!targetCell) return;
    if (isStop(targetCell)) return;

    updateCells(cell, targetCell, obj.id);
  });

  return field;
};
