const gameBoard = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0];

  const winCondition = [
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  let winner = null;
  const Player = (name, marks, turn) => {
    return { name, marks, turn };
  };

  const player1 = Player("Player 1", "X", true);
  const player2 = Player("Player 2", "O", false);
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("click", function () {
      if (cell.textContent == "") {
        if (player1.turn) {
          displayController.updateCell(cell, player1);
          player1.turn = false;
          player2.turn = true;
          board[parseInt(cell.getAttribute("cellIndex"))] = 1;
        } else {
          displayController.updateCell(cell, player2);
          player2.turn = false;
          player1.turn = true;
          board[parseInt(cell.getAttribute("cellIndex"))] = 2;
        }
      }
      checkWin();
    })
  );
  const checkWin = () => {
    for (let j = 0; j < winCondition.length; j++) {
      if (
        board[winCondition[j][0]] == 0 ||
        board[winCondition[j][1]] == 0 ||
        board[winCondition[j][2]] == 0
      )
        continue;
      if (
        board[winCondition[j][0]] == board[winCondition[j][1]] &&
        board[winCondition[j][2]] == board[winCondition[j][1]]
      ) {
        winner = board[winCondition[j][0]] == 1 ? "X" : "O";
        displayController.endGame(
          board[winCondition[j][0]] == 1 ? player1 : player2
        );
      }
    }
  };
  return { winner, player1 };
})();

const displayController = (() => {
  const gameBoardd = document.querySelector(".game-board");
  const status = document.querySelector(".status");
  const start = document.getElementById("start-game-btn");
  start.addEventListener("click", function () {
    start.style.display = "none";
    gameBoardd.style.display = "grid";
    status.style.display = "block";
  });
  const updateCell = (cell, player) => {
    cell.textContent += player.marks;
    status.textContent = player.marks == "X" ? "O's turn" : "X's turn";
  };
  const endGame = (playerWon) => {
    status.textContent = playerWon.marks + " has won the game";
  };
  return { updateCell, endGame };
})();
