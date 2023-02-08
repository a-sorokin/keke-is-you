import React from "react";
import { Cell } from "features/Cell/Cell";

type TProps = {
  sizeX: number;
  sizeY: number;
};

const getArr = (size: number) => Array(size).fill(0);

export const Field: React.FC<TProps> = ({ sizeX, sizeY }) => {
  return (
    <div>
      {getArr(sizeX).map((_, rowN) => (
        <div key={`row-${rowN}`}>
          {getArr(sizeY).map((_, colN) => (
            <div key={`col-${colN}`}>
              <Cell />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
