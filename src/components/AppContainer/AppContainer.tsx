import { LevelSelector } from "components/LevelSelector/LevelSelector";
import { LevelArea } from "components/LevelArea/LevelArea";
import style from "./AppContainer.module.scss";

export const AppContainer = () => {
  return (
    <div className={style.appContainer}>
      <LevelSelector />
      <LevelArea />
    </div>
  );
};
