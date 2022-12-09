class Game {
  constructor() {
    this.started = false;
  }
  isStarted() {
    return this.started;
  }
  start() {
    this.started = true;
    displayController("start-game");
  }
  get(propName) {
    return this[propName];
  }
  set(propName, value) {
    this[propName] = value;
  }
}

const game = new Game();
const startBtn = document.getElementById("startGame");

startBtn &&
  startBtn.addEventListener("click", () => {
    game.start();
  });

function displayController(element) {
  //Will control every DOM in "content" div, takes the element to display as argument
  const content = document.getElementById("content");
  content.innerHTML = "";
  if (element === "start-game") {
    content.innerHTML += "<h1>Game starting</h1>";
  }
}
