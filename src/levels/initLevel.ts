import { TCell, TField, TFieldConfig, TLevelConfig } from "levels/types";
import { modelCreator, models } from "models/models";
import { TMaterialObjects, TModelCreator } from "models/types";

const createCellsReferences = (field: TField, sizeX: number, sizeY: number) => {
  for (let i = 1; i <= sizeX; i++) {
    for (let j = 1; j <= sizeY; j++) {
      const cell = field[`${i},${j}`];

      if (i > 1) cell.adjoiningCells.left = field[`${i - 1},${j}`];
      if (i < sizeX) cell.adjoiningCells.right = field[`${i + 1},${j}`];
      if (j > 1) cell.adjoiningCells.up = field[`${i},${j - 1}`];
      if (j < sizeY) cell.adjoiningCells.down = field[`${i},${j + 1}`];
    }
  }
};

const createField = (sizeX: number, sizeY: number): TField => {
  const field: { [key: string]: TCell } = {};
  for (let i = 1; i <= sizeX; i++) {
    for (let j = 1; j <= sizeY; j++) {
      field[`${i},${j}`] = {
        id: `${i},${j}`,
        adjoiningCells: { up: null, down: null, left: null, right: null },
        materialObjects: [],
      };
    }
  }
  createCellsReferences(field, sizeX, sizeY);
  return field;
};

export const getLevelData = (
  level: TLevelConfig
): { field: TField; materialObjects: TMaterialObjects } => {
  const field = createField(level.field.sizeX, level.field.sizeY);
  const { materialObjects } = level;
  const objects: TMaterialObjects = [];

  materialObjects.forEach((object) => {
    const getBaseModel: TModelCreator = models[object.name];

    object.coordinates.forEach((coords) => {
      const baseObj = getBaseModel({ x: coords[0], y: coords[1] });
      const obj = modelCreator(baseObj, object.props);
      field[`${coords[0]},${coords[1]}`].materialObjects.push(obj);
      objects.push(obj);
    });
  });

  return {
    field,
    materialObjects: objects,
  };
};

export const createFieldWithObjects = (
  fieldSize: TFieldConfig,
  materialObjects: TMaterialObjects
): TField => {
  const field = createField(fieldSize.sizeX, fieldSize.sizeY);
  materialObjects.forEach((obj) => {
    field[obj.coordinates].materialObjects.push(obj);
  });
  return field;
};
