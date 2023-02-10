import style from "./Cell.module.scss";
import React from "react";
import { TMaterialObjects } from "models/types";

type TProps = {
  materialObjects: TMaterialObjects;
};

export const Cell: React.FC<TProps> = ({ materialObjects }) => {
  return (
    <div className={style.cell}>
      {materialObjects.map((obj) => (
        <div key={obj.id} className={style.obj}>
          {obj.icon || obj.name}
        </div>
      ))}
    </div>
  );
};
