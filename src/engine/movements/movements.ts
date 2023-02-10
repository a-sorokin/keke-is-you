import { TMaterialObjects } from "models/types";
import { TDirection } from "engine/moveController/types";
import { TField, TFieldConfig } from "levels/types";

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

    const objIndex = cell.materialObjects.findIndex((o) => o.id === obj.id);
    const isolatedObj = cell.materialObjects.splice(objIndex, 1)[0];

    isolatedObj.coordinates = targetCell.id;
    targetCell.materialObjects.push(isolatedObj);
  });

  return field;
};
