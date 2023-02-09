import { TField, TFieldConfig, TLevelConfig } from "levels/types";
import { modelCreator, models } from "models/models";
import { TMaterialObjects, TModelCreator } from "models/types";

const createField = (sizeX: number, sizeY: number): TField => {
  const field: { [key: string]: [] } = {};
  for (let i = 1; i <= sizeX; i++) {
    for (let j = 1; j <= sizeY; j++) {
      field[`${i},${j}`] = [];
    }
  }
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
      field[`${coords[0]},${coords[1]}`].push(obj);
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
    const { x, y } = obj.coordinates;
    field[`${x},${y}`].push(obj);
  });
  return field;
};
