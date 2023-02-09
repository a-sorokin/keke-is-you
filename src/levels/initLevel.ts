import { TField, TLevelConfig } from "levels/types";
import { models } from "models/models";
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
    const modelCreator: TModelCreator = models[object.name];

    object.coordinates.forEach((coords) => {
      const obj = modelCreator({ x: coords[0], y: coords[1] });
      field[`${coords[0]},${coords[1]}`].push(obj);
      objects.push(obj);
    });
  });

  return {
    field,
    materialObjects: objects,
  };
};
