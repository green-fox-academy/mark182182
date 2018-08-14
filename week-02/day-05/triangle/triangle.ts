'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let triangleSide: number = 0;

function drawTriangle() {
  ctx.beginPath();
  for (triangleSide; triangleSide <= canvas.height; triangleSide++) {
    if (triangleSide % 20 == 0) {
      ctx.moveTo(canvas.height / 2 + triangleSide / 2, triangleSide * Math.sqrt(3) / 2);
      ctx.lineTo(triangleSide, canvas.height + triangleSide);
      ctx.moveTo(canvas.height / 2 - triangleSide / 2, triangleSide * Math.sqrt(3) / 2);
      ctx.lineTo(canvas.height - triangleSide, canvas.height + triangleSide);
    }
  }
  for (let drawSeparator = 0; drawSeparator <= canvas.height; drawSeparator++) {
    if (drawSeparator % 20 == 0) {
      ctx.moveTo(drawSeparator / 2, canvas.height - drawSeparator);
      ctx.lineTo(canvas.height - drawSeparator / 2, canvas.height - drawSeparator);
    }
  }
  ctx.stroke();
}
drawTriangle();