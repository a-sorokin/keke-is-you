import { levels } from "levels/levels";
import style from "./LevelSelector.module.scss";
import { useAppStore } from "store/store";

export const LevelSelector = () => {
  const initLevel = useAppStore((state) => state.initLevel);

  return (
    <div className={style.levelSelector}>
      <h4 className={style.title}>Select level:</h4>
      {levels.map((level) => (
        <button key={level.id} onClick={() => initLevel(level.id)}>
          {level.name}
        </button>
      ))}
    </div>
  );
};
