import style from "./Cell.module.scss";
import React from "react";
import { TCell } from "levels/types";

type TProps = {
  cellObject: TCell;
};

export const Cell: React.FC<TProps> = ({ cellObject }) => {
  return (
    <div className={style.cell}>
      {cellObject.materialObjects.map((obj) => (
        <div key={obj.id} className={style.obj}>
          {obj.icon || obj.name}
        </div>
      ))}
    </div>
  );
};
