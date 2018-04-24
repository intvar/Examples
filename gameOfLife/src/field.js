import EventEmitter from './eventEmitter';

export default class Field extends EventEmitter {
  constructor(numberRows, numberLines) {
    super();
    this.cells = new Array(numberLines).fill(false)
      .map(() => new Array(numberRows).fill(false));
  }
  animate({ x, y }) {
    this.cells[x][y] = true;
    super.emit('ANIMATE', { x, y });
  }
  kill({ x, y }) {
    this.cells[x][y] = false;
    super.emit('KILL', { x, y });
  }
  isAlive({ x, y }) {
    return this.cells[x][y];
  }
  getNumberLivingNeighbours({ x, y }) {
    const steps = [-1, 0, 1];
    let number = 0;
    for (const stepLine of steps) {
      for (const stepRow of steps) {
        if (stepLine === 0 && stepRow === 0) continue;
        if (this.cells[x + stepLine] && this.cells[x + stepLine][y + stepRow]) {
          number += 1;
        }
      }
    }
    return number;
  }
}
