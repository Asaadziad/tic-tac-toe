export function displayBoard(val) {
  if (!(val === "true")) return;
  let boardSize = 9;
  const content = document.getElementById("content");
  if (!content) return;
  console.log("test2");
  content.innerHTML = "";
  content.innerHTML += `<div class="container gameBoard" id="board"></div>`;
  const gameBoard = document.getElementById("board");
  if (!gameBoard) return;
  for (let i = 0; i < boardSize; i++) {
    gameBoard.innerHTML += `<div class="cell" id="cell${i}"></div>`;
  }
}

export function sendAlert(string, type) {
  const alert = document.getElementById("alertArea");
  alert.innerHTML += `<div class="alert alert-${type}" role="alert">
  ${string}
</div>`;
}
