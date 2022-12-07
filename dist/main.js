"use strict";
class Player {
    constructor(name, sign, turn) {
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
        let first = new Player("asaad", "X", true);
        let second = new Player("test", "O", false);
        this.started = true;
    }
    isStarted() {
        return this.started;
    }
    stop() {
        this.started = false;
    }
    addPlayer(p) {
        this.players.push(p);
    }
}
let g = new Game();
const startBtn = document.getElementById("startGame");
if (startBtn) {
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        g.start();
    });
}
function updateCell() {
    console.log(g.isStarted());
}
function displayBoard() {
    var _a;
    const board = document.getElementById("board");
    const boardSize = 9;
    if (!board)
        return;
    for (let i = 0; i < boardSize; i++) {
        board.innerHTML += `<div class="cell" id="cell${i}"></div>`;
    }
    for (let i = 0; i < boardSize; i++) {
        const cell = (_a = document
            .getElementById(`cell${i}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", updateCell);
    }
}
function assignPlayers(pNumber) {
    for (let i = 0; i < pNumber; i++) {
        console.log(i);
    }
}
