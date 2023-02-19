import { levels } from "levels/levels";
import style from "./LevelSelector.module.scss";
import { useGameStore } from "stores/store";
import { useEffect } from "react";

export const LevelSelector = () => {
  const initLevel = useGameStore((state) => state.initLevel);

  useEffect(() => {
    initLevel(levels[0].id);
  }, [initLevel]);

  return (
    <div className={style.levelSelector}>
      <h4 className={style.title}>Select level:</h4>
      {levels.map((level) => (
        <button
          key={level.id}
          className={style.btn}
          onClick={() => initLevel(level.id)}
        >
          {level.name}
        </button>
      ))}
    </div>
  );
};
