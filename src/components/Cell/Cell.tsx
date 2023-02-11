import style from "./Cell.module.scss";
import React, { useMemo } from "react";
import { TCell } from "levels/types";
import { clsx } from "clsx";

type TProps = {
  cellObject: TCell;
};

export const Cell: React.FC<TProps> = ({ cellObject }) => {
  const isWinCell = useMemo(
    () => cellObject.materialObjects.some((obj) => obj.props.isWin),
    [cellObject.materialObjects]
  );

  return (
    <div className={style.cell}>
      {cellObject.materialObjects.map((obj) => (
        <div
          key={obj.id}
          className={clsx(style.obj, {
            [style.winCell]: isWinCell,
          })}
        >
          {obj.icon || obj.name}
        </div>
      ))}
    </div>
  );
};
