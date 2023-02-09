import { LevelSelector } from "features/LevelSelector/LevelSelector";
import { LevelArea } from "features/LevelArea/LevelArea";
import style from "./AppContainer.module.scss";

export const AppContainer = () => {
  return (
    <div className={style.appContainer}>
      <LevelSelector />
      <LevelArea />
    </div>
  );
};
