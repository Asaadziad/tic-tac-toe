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
    constructor(started) {
        this.started = this.start();
    }
    start() {
        let first = new Player("asaad", "X", true);
        let second = new Player("test", "O", false);
        return true;
    }
    isStarted() {
        return this.started;
    }
    stop() {
        this.started = false;
    }
}
function updateCell() {
    console.log("test");
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
displayBoard();
