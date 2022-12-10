export default class Player {
  constructor(name) {
    this.name = name;
  }
  get(propName) {
    return this[propName];
  }
  set(propName, value) {
    this[propName] = value;
  }
}

export function assignPlayer(numOfPlayers) {
  event.preventDefault();
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += "test";
  return true;
}
