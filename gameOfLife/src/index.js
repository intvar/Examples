import Queue from './queue';
import Field from './field';
import Canvas from './canvas';

const SIZE_CELL = 25;
const canvas = new Canvas(SIZE_CELL);
const field = new Field(canvas.numbOfCellsInRow, canvas.numbOfCellsInLine);
field.subsribe('ANIMATE', canvas.paintOverCell.bind(canvas));
field.subsribe('KILL', canvas.clearCell.bind(canvas));

function clickCanvasHandler(event) {
  const coordinates = canvas.getCoordinateFromPx({
    xInPx: event.offsetX,
    yInPx: event.offsetY,
  });
  if (field.isAlive(coordinates)) {
    field.kill(coordinates);
  } else {
    field.animate(coordinates);
  }
}

function run() {
  const queue = new Queue();
  for (let x = 0; x < canvas.numbOfCellsInLine; x += 1) {
    for (let y = 0; y < canvas.numbOfCellsInRow; y += 1) {
      const numberNeighbours = field.getNumberLivingNeighbours({ x, y });
      if (field.isAlive({ x, y })) {
        if (numberNeighbours < 2 || numberNeighbours > 3) {
          queue.add(field.kill, field, { x, y });
        }
      } else if (numberNeighbours === 3) {
        queue.add(field.animate, field, { x, y });
      }
    }
  }
  queue.execute();
}

let intervalId;
function clickStartHandler(e) {
  const TIME_MS = 200;
  if (intervalId) {
    e.currentTarget.innerText = 'Start';
    clearInterval(intervalId);
    intervalId = null;
  } else {
    e.currentTarget.innerText = 'Stop';
    intervalId = setInterval(run, TIME_MS);
  }
}

canvas.canvasEl.addEventListener('click', clickCanvasHandler);
document.getElementById('start-button').addEventListener('click', clickStartHandler);
canvas.drawGrid();
