const getRange = (coords: number[]): number[] => {
  if (coords.length === 1) return coords;
  const range = [];
  for (let i = coords[0]; i <= coords[coords.length - 1]; i++) {
    range.push(i);
  }
  return range;
};

export const getCoordinatesByRange = (x: number[], y: number[]): number[][] => {
  const coordinates: number[][] = [];
  const rangeX = getRange(x);
  const rangeY = getRange(y);

  rangeX.forEach((x) => {
    rangeY.forEach((y) => {
      coordinates.push([x, y]);
    });
  });

  return coordinates;
};
