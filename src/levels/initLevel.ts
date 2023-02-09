import { TField, TLevelConfig, TMaterialObjects } from "levels/types";
import { models } from "models/models";
import { TModelCreator } from "models/types";

const createField = (sizeX: number, sizeY: number): TField => {
  const field: { [key: string]: [] } = {};
  for (let i = 1; i <= sizeX; i++) {
    for (let j = 1; j <= sizeY; j++) {
      field[`${i},${j}`] = [];
    }
  }
  return field;
};

export const getRange = (coords: number[]): number[] => {
  if (coords.length === 1) return coords;
  const range = [];
  for (let i = coords[0]; i <= coords[coords.length - 1]; i++) {
    range.push(i);
  }
  return range;
};

const getAllObjectCoordinates = (x: number[], y: number[]) => {
  const coordinates: { combined: string; x: number; y: number }[] = [];
  const rangeX = getRange(x);
  const rangeY = getRange(y);

  rangeX.forEach((x) => {
    rangeY.forEach((y) => {
      coordinates.push({ combined: `${x},${y}`, x, y });
    });
  });

  return coordinates;
};

export const getLevelData = (
  level: TLevelConfig
): { field: TField; materialObjects: TMaterialObjects } => {
  const field = createField(level.field.sizeX, level.field.sizeY);
  const { materialObjects } = level;

  // todo: remove any
  const objects: any = [];
  materialObjects.forEach((object) => {
    const modelCreator: TModelCreator = models[object.name];
    const coords = getAllObjectCoordinates(object.x, object.y);

    coords.forEach((coords) => {
      const obj = modelCreator({ x: coords.x, y: coords.y });
      field[coords.combined].push(obj);
      objects.push(obj);
    });
  });

  return {
    field,
    materialObjects: objects,
  };
};
