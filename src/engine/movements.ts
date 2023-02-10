import { TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { TCell, TField, TFieldConfig } from "levels/types";

const isStop = (targetCell: TCell): boolean => {
  return targetCell.materialObjects.some((o) => o.isStop);
};

const getPushableObjects = (targetCell: TCell): TMaterialObjects => {
  return targetCell.materialObjects.filter((o) => o.isPush);
};

const updateCells = (cell: TCell, targetCell: TCell, id: string) => {
  const objIndex = cell.materialObjects.findIndex((o) => o.id === id);
  const isolatedObj = cell.materialObjects.splice(objIndex, 1)[0];

  isolatedObj.coordinates = targetCell.id;
  targetCell.materialObjects.push(isolatedObj);
};

const changeObjectPosition = (
  cell: TCell | null,
  direction: TDirection,
  objectId: string
): boolean => {
  if (!cell) return false;
  const targetCell = cell.adjoiningCells[direction];

  if (!targetCell) return false;
  if (isStop(targetCell)) return false;

  const pushableObjects = getPushableObjects(targetCell);

  if (pushableObjects.length) {
    const isDone = pushableObjects.reduce((isAllDone, obj) => {
      return isAllDone
        ? changeObjectPosition(targetCell, direction, obj.id)
        : false;
    }, true);

    if (!isDone) return false;
  }

  updateCells(cell, targetCell, objectId);

  return true;
};

export const moveObjects = (
  direction: TDirection,
  materialObjects: TMaterialObjects,
  fieldSize: TFieldConfig,
  field: TField
) => {
  materialObjects.forEach((obj) => {
    if (!obj.isYou) return;
    const cell = field[obj.coordinates];
    changeObjectPosition(cell, direction, obj.id);
  });
};
