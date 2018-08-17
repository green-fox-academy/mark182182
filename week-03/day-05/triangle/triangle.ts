'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const startCoordX: number = canvas.width / 2;
const startCoordY: number = canvas.width / 2;
const size: number = 200;

function drawFractal(startCoordX: number, startCoordY: number, size: number) {
  ctx.translate(-size / 4, -size / 4);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(size, 0);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(0, size);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(-size, 0);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  drawFractal(startCoordX * size, startCoordY * size, size - (size / 2));
}

function drawSquare(startCoordX: number, startCoordY: number, size: number) {
  ctx.translate(startCoordX - size / 2, startCoordY - size / 2);
  ctx.strokeRect(0, 0, size, size);
  drawFractal(startCoordX, startCoordY, size);
}

drawSquare(startCoordX, startCoordY, size);