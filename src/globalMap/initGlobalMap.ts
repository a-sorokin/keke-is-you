const createBasicField = (sizeX: number, sizeY: number): any => {
  const field: { [key: string]: any } = {};
  for (let i = 1; i <= sizeX; i++) {
    for (let j = 1; j <= sizeY; j++) {
      field[`${i},${j}`] = {
        id: `${i},${j}`,
        materialObjects: [],
      };
    }
  }
  return field;
};

export const initGlobalMap = () => {};
