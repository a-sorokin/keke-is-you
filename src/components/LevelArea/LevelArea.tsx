import { Field } from "components/Field/Field";
import style from "./LevelArea.module.scss";
import { useGameStore } from "store/store";

export const LevelArea = () => {
  const { fieldSize, isWin, isYouHere } = useGameStore((state) => ({
    fieldSize: state.fieldSize,
    isWin: state.isWin,
    isYouHere: state.isYouHere,
  }));

  return (
    <div className={style.levelArea}>
      {fieldSize.sizeX ? (
        <Field sizeX={fieldSize.sizeX} sizeY={fieldSize.sizeY} />
      ) : null}

      {isYouHere ? null : <div>Press "Z" for undo</div>}
      {isWin ? <h2 className={style.win}>You win!</h2> : null}
    </div>
  );
};
