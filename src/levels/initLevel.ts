import { TCell, TField, TFieldConfig, TLevelConfig } from "levels/types";
import { M_OBJECT_TYPES, models } from "models/models";
import { TMaterialObjects } from "models/types";
import { TStateLogicBlocks } from "store/types";

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
): {
  field: TField;
  materialObjects: TMaterialObjects;
  logicBlocks: TStateLogicBlocks;
} => {
  const field = createField(level.field.sizeX, level.field.sizeY);
  const { materialObjects } = level;
  const objects: TMaterialObjects = [];
  const logicBlocks: TStateLogicBlocks = [];

  materialObjects.forEach((object) => {
    const getBaseModel = models[object.name];

    object.coordinates.forEach((coords) => {
      const baseObj = getBaseModel();
      const strCoords: `${number},${number}` = `${coords[0]},${coords[1]}`;

      baseObj.coordinates = strCoords;

      const obj = { ...baseObj, ...object.props };
      obj.props = { ...obj.props, ...object.props };

      field[strCoords].materialObjects.push(obj);
      objects.push(obj);

      if (obj.type === M_OBJECT_TYPES.logic) logicBlocks.push(obj.id);
    });
  });

  return {
    field,
    materialObjects: objects,
    logicBlocks,
  };
};

export const createFieldWithObjects = (
  fieldSize: TFieldConfig,
  materialObjects: TMaterialObjects
): { updatedField: TField; isYouHere: boolean } => {
  const field = createField(fieldSize.sizeX, fieldSize.sizeY);
  let isYouHere = false;
  materialObjects.forEach((obj) => {
    field[obj.coordinates].materialObjects.push(obj);
    if (obj.props.isYou) isYouHere = true;
  });
  return { updatedField: field, isYouHere };
};
