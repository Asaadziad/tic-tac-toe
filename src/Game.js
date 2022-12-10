import Player, { assignPlayer } from "./Player.js";
export default class Game {
  constructor() {
    this.started = false;
  }
  isStarted() {
    return this.started;
  }
  start() {
    this.started = true;
    assignPlayer(2);
  }
  get(propName) {
    return this[propName];
  }
  set(propName, value) {
    this[propName] = value;
  }
}
