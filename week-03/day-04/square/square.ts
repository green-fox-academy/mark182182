'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const centerX: number = canvas.width / 2;
const centerY: number = canvas.height / 2;

canvas.onmousemove = function (e) {

  let rect = this.getBoundingClientRect(),
    xCord = e.clientX - rect.left,
    yCord = e.clientY - rect.top
  recursiveSquares(xCord, yCord);

}



function recursiveSquares(size: number, distance: number) {
  if (size > 0) {
    let x: number = centerX - size / 2;
    let y: number = centerY - size / 2;
    ctx.strokeRect(x, y, size, size);

    let newSize: number = size - distance;
    let newDistance: number = distance + 5;
    recursiveSquares(newSize, newDistance);
  }
}
