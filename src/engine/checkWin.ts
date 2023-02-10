import { TCell, TField } from "levels/types";
import { TMaterialObjects } from "models/types";

const isYouAndWinHere = (cell: TCell): boolean => {
  let isWinHere = false;
  let isYouHere = false;

  cell.materialObjects.forEach((o) => {
    if (o.isYou) isYouHere = true;
    if (o.isWin) isWinHere = true;
  });

  return isYouHere && isWinHere;
};

export const checkWin = (
  materialObjects: TMaterialObjects,
  field: TField
): boolean => {
  for (let i = 0; i < materialObjects.length; i++) {
    const obj = materialObjects[i];
    const cell = field[obj.coordinates];

    if (isYouAndWinHere(cell)) {
      return true;
    }
  }

  return false;
};
