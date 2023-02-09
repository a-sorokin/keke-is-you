import { Field } from "features/Field/Field";
import style from "./LevelArea.module.scss";
import { useAppStore } from "store/store";

export const LevelArea = () => {
  const fieldSize = useAppStore((state) => state.fieldSize);

  return (
    <div className={style.levelArea}>
      {fieldSize.sizeX ? (
        <Field sizeX={fieldSize.sizeX} sizeY={fieldSize.sizeY} />
      ) : null}
    </div>
  );
};
