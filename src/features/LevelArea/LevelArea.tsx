import { Field } from "features/Field/Field";
import style from "./LevelArea.module.scss";
import { useGameStore } from "store/store";

export const LevelArea = () => {
  const { fieldSize, isWin } = useGameStore((state) => ({
    fieldSize: state.fieldSize,
    isWin: state.isWin,
  }));

  return (
    <div className={style.levelArea}>
      {fieldSize.sizeX ? (
        <Field sizeX={fieldSize.sizeX} sizeY={fieldSize.sizeY} />
      ) : null}

      {isWin ? <h2 className={style.win}>You win!</h2> : null}
    </div>
  );
};
