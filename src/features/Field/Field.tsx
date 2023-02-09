import React from "react";
import { Cell } from "features/Cell/Cell";

type TProps = {
  sizeX: number;
  sizeY: number;
};

const createEmptyArr = (size: number) => Array(size).fill(0);

export const Field: React.FC<TProps> = ({ sizeX, sizeY }) => {
  return (
    <div>
      {createEmptyArr(sizeX).map((_, rowN) => (
        <div key={`row-${rowN}`}>
          {createEmptyArr(sizeY).map((_, colN) => (
            <div key={`col-${colN}`}>
              <Cell />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
