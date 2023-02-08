import { levels } from "levels/levels";

export const LevelSelector = () => {
  return (
    <div>
      Select level:
      {levels.map((level) => (
        <div key={level.id}>{level.name}</div>
      ))}
    </div>
  );
};
