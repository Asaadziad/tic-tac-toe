import Game from "./src/Game.js";
import { displayBoard, sendAlert } from "./src/DisplayController.js";
import { assignPlayer } from "./src/Player.js";

const game = new Game();

const startBtn = document.getElementById("startGame");

startBtn &&
  startBtn.addEventListener("click", () => {
    let p = new Promise((resolve, reject) => {
      let a = assignPlayer(2);
      if (a) {
        resolve("false");
      } else {
        reject(["test", "danger"]);
      }
    });
    // game.start();
    p.then((val) => displayBoard(val)).catch((err) =>
      sendAlert(err[0], err[1])
    );
  });
