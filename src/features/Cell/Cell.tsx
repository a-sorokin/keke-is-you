import style from "./Cell.module.scss";
import React from "react";
import { TMaterialObjects } from "levels/types";

type TProps = {
  materialObjects: TMaterialObjects;
};

export const Cell: React.FC<TProps> = ({ materialObjects }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.cell}>
        {materialObjects.map((obj) => (
          <div key={`${obj.name}${obj.coordinates.x}${obj.coordinates.y}`}>
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  );
};
