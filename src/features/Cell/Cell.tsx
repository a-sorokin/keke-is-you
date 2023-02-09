import style from "./Cell.module.scss";
import React from "react";
import { TMaterialObjects } from "levels/types";

type TProps = {
  materialObjects: TMaterialObjects;
};

export const Cell: React.FC<TProps> = ({ materialObjects }) => {
  return (
    <div className={style.cell}>
      {materialObjects.length ? (
        materialObjects.map((obj) => (
          <div key={`${obj.name}${obj.x}${obj.y}`}>{obj.name}</div>
        ))
      ) : (
        <div>.</div>
      )}
    </div>
  );
};
