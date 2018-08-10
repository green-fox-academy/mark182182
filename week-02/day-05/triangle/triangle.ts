'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle() {
  ctx.beginPath();
  for (let drawLeftLine = 0; drawLeftLine <= canvas.height; drawLeftLine += 0.000001) {
    if (drawLeftLine % 2 * Math.sqrt(3) == 0) {
      ctx.moveTo(canvas.height / 2 + drawLeftLine / 2, drawLeftLine);
      ctx.lineTo(drawLeftLine, canvas.height + drawLeftLine);
    }
  }
  for (let drawRightLine = 0; drawRightLine <= canvas.height; drawRightLine++) {
    if (drawRightLine % 2 * Math.sqrt(3) == 0) {
      ctx.moveTo(canvas.height / 2 - drawRightLine / 2, drawRightLine);
      ctx.lineTo(canvas.height - drawRightLine, canvas.height + drawRightLine);
    }
  }
  for (let drawSeparator = 0; drawSeparator <= canvas.height; drawSeparator++) {
    if (drawSeparator % 2 * Math.sqrt(3) == 0) {
      ctx.moveTo(drawSeparator / 2, canvas.height - drawSeparator);
      ctx.lineTo(canvas.height - drawSeparator / 2, canvas.height - drawSeparator);
    }
  }
  ctx.stroke();
}
drawTriangle();