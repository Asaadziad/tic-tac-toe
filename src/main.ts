class Player {
  private name: String;
  private sign: String;
  private turn: boolean;
  constructor(name: string, sign: string, turn: boolean) {
    this.name = name;
    this.sign = sign;
    this.turn = turn;
  }
  getName() {
    return this.name;
  }
  getSign() {
    return this.sign;
  }
  isTurn() {
    return this.turn;
  }
}
class Game {
  private started: boolean;
  private players: Player[];
  constructor() {
    this.started = false;
    this.players = [];
  }
  start() {
    if (this.players.length <= 0) {
      assignPlayers(2);
      return;
    }
    displayBoard();
    let first: Player = new Player("asaad", "X", true);
    let second: Player = new Player("test", "O", false);
    this.started = true;
  }
  isStarted() {
    return this.started;
  }
  stop() {
    this.started = false;
  }
  addPlayer(p: Player) {
    this.players.push(p);
  }
}

let g: Game = new Game();
const startBtn = document.getElementById("startGame");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    g.start();
  });
}

function updateCell(): void {
  console.log(g.isStarted());
}

function displayBoard(): void {
  const board = document.getElementById("board");
  const boardSize: number = 9;
  if (!board) return;
  for (let i = 0; i < boardSize; i++) {
    board.innerHTML += `<div class="cell" id="cell${i}"></div>`;
  }
  for (let i = 0; i < boardSize; i++) {
    const cell = document
      .getElementById(`cell${i}`)
      ?.addEventListener("click", updateCell);
  }
}

function assignPlayers(pNumber: number) {
  for (let i = 0; i < pNumber; i++) {
    console.log(i);
  }
}
