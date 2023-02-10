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

    const objCoordinates = `${obj.coordinates.x},${obj.coordinates.y}`;
    const cell = field[objCoordinates];
    const targetCell = cell.adjoiningCells[direction];

    if (!targetCell) return;

    const objIndex = cell.materialObjects.findIndex((o) => o.id === obj.id);
    const isolatedObj = cell.materialObjects.splice(objIndex, 1)[0];
    const targetCoords = targetCell.id.split(",");

    isolatedObj.coordinates = {
      x: Number(targetCoords[0]),
      y: Number(targetCoords[1]),
    };
    targetCell.materialObjects.push(isolatedObj);
  });

  return field;
};
