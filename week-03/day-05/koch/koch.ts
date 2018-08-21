'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const startCoordX: number = canvas.width / 2;
const startCoordY: number = canvas.width / 2;
const lengthOfLine: number = 100;

function makeKoch(startCoordX: number, startCoordY: number, lengthOfLine: number) {
  ctx.moveTo(startCoordX - lengthOfLine, startCoordY / 2);
  ctx.lineTo(startCoordX - startCoordX / 2, startCoordY);
  ctx.moveTo(startCoordX - lengthOfLine, startCoordY / 2);
  ctx.lineTo(startCoordX - startCoordX / 6, startCoordY);
  makeKoch(startCoordX, startCoordY, lengthOfLine);
}

function makeLine(startCoordX: number, startCoordY: number, lengthOfLine: number) {
  ctx.beginPath();
  ctx.moveTo(startCoordX, startCoordY);
  ctx.lineTo(lengthOfLine, startCoordY);
  makeKoch(startCoordX, startCoordY, lengthOfLine);
  ctx.stroke();
}

makeLine(startCoordX, startCoordY, lengthOfLine);