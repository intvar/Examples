export default class Canvas {
  constructor(sizeCell) {
    this.canvasEl = document.getElementById('canvas');
    this.width = this.canvasEl.width;
    this.height = this.canvasEl.height;
    this.numbOfCellsInLine = Math.round(this.width / sizeCell);
    this.numbOfCellsInRow = Math.round(this.height / sizeCell);
    this.ctx = this.canvasEl.getContext('2d');
    this.sizeCell = sizeCell;
  }
  getCoordinateFromPx({ xInPx, yInPx }) {
    return {
      x: Math.floor(xInPx / this.sizeCell),
      y: Math.floor(yInPx / this.sizeCell),
    };
  }
  paintOverCell({ x, y }, color = 'black') {
    const halfSizeCell = this.sizeCell / 2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(
      (x * this.sizeCell) + halfSizeCell,
      (y * this.sizeCell) + halfSizeCell,
      halfSizeCell - 2,
      0,
      2 * Math.PI,
    );
    this.ctx.fill();
  }
  clearCell({ x, y }) {
    this.ctx.clearRect(
      (x * this.sizeCell) + 1,
      (y * this.sizeCell) + 1,
      this.sizeCell - 2,
      this.sizeCell - 2,
    );
  }
  drawGrid() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = 'gray';
    for (let i = 1; i < this.numbOfCellsInRow; i += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.sizeCell);
      this.ctx.lineTo(this.width, i * this.sizeCell);
      this.ctx.stroke();
    }
    for (let i = 1; i < this.numbOfCellsInLine; i += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.sizeCell, 0);
      this.ctx.lineTo(i * this.sizeCell, this.height);
      this.ctx.stroke();
    }
  }
}
