import { FC, useCallback, useMemo } from "react";
import { Cell } from "components/Cell/Cell";
import style from "./Field.module.scss";
import { useGameStore } from "store/store";
import { TFieldConfig } from "levels/types";

type TProps = TFieldConfig;

const getFieldKeys = (sizeX: number, sizeY: number) => {
  const keys = [];
  for (let j = 1; j <= sizeY; j++) {
    for (let i = 1; i <= sizeX; i++) {
      keys.push(`${i},${j}`);
    }
  }
  return keys;
};

export const Field: FC<TProps> = ({ sizeX, sizeY }) => {
  const fieldKeys = useMemo(() => getFieldKeys(sizeX, sizeY), [sizeX, sizeY]);
  const field = useGameStore((state) => state.field);
  const getCellObjects = useCallback((id: string) => field[id], [field]);

  return (
    <div
      className={style.field}
      style={{
        gridTemplateColumns: `repeat(${sizeX}, 1fr)`,
      }}
    >
      {fieldKeys.map((id) => (
        <div key={id} id={id}>
          <Cell cellObject={getCellObjects(id)} />
        </div>
      ))}
    </div>
  );
};
