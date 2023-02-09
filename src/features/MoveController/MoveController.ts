export const MoveController = () => {
  window.addEventListener("load", () => {
    window.onkeydown = function (event) {
      if (event.key === "ArrowRight") {
        console.log(`ArrowRight`);
      } else if (event.key === "ArrowLeft") {
        console.log(`ArrowLeft`);
      } else if (event.key === "ArrowUp") {
        console.log(`ArrowUp`);
      } else if (event.key === "ArrowDown") {
        console.log(`ArrowDown`);
      }
    };
  });
};

MoveController();
