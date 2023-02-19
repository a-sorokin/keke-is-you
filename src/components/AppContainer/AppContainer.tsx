import { LevelSelector } from "components/LevelSelector/LevelSelector";
import { LevelArea } from "components/LevelArea/LevelArea";
import style from "./AppContainer.module.scss";
import { GameViewPort } from "components/GameViewPort/GameViewPort";

export const AppContainer = () => {
  return (
    <div className={style.appContainer}>
      {/*<LevelSelector />*/}
      <GameViewPort />
      {/*<LevelArea />*/}
    </div>
  );
};
