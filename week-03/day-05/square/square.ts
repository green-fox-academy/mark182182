'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const startCoordX: number = canvas.width / 2;
const startCoordY: number = canvas.width / 2;
const size: number = 300;

function drawOuterSquares(size: number) {
  ctx.translate(-size / 4, -size / 4);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(size, 0);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(0, size);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  ctx.translate(-size, 0);
  ctx.strokeRect(0, 0, size / 2, size / 2);
  if (size > canvas.width / 8) {
    drawOuterSquares(size / 2);
  }
}

function drawSquare(startCoordX: number, startCoordY: number, mainSquareSize: number) {
  ctx.translate(startCoordX - mainSquareSize / 2, startCoordY - mainSquareSize / 2);
  ctx.strokeRect(0, 0, mainSquareSize, mainSquareSize);
  drawOuterSquares(mainSquareSize);
}

drawSquare(startCoordX, startCoordY, size);