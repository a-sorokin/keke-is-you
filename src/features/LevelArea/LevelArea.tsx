import { Field } from "features/Field/Field";
import style from "./LevelArea.module.scss";

export const LevelArea = () => {
  return (
    <div className={style.levelArea}>
      <Field sizeX={2} sizeY={3} />
    </div>
  );
};
