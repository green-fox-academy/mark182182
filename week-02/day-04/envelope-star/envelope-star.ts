'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const divideCanvasBy = 1;
const spaceBetweenShapeLines = 80;

function putInside(): void {
  for (let drawRows: number = 0; drawRows < canvas.width; drawRows += canvas.width / divideCanvasBy) {
    for (let drawShapes: number = 0; drawShapes < canvas.width; drawShapes++) {
      makeShape(canvas.width / divideCanvasBy * drawShapes, drawRows);
    }
  }
}

function divideCanvas(): void {
  ctx.beginPath();
  for (let drawLines: number = 0; drawLines < canvas.width; drawLines++) {
    if (drawLines % (canvas.width / divideCanvasBy) == 0) {
      ctx.moveTo(drawLines, 0);
      ctx.lineTo(drawLines, canvas.width);
    }
  }
  for (let drawLines: number = 0; drawLines < canvas.width; drawLines++) {
    if (drawLines % (canvas.width / divideCanvasBy) == 0) {
      ctx.moveTo(0, drawLines);
      ctx.lineTo(canvas.width, drawLines);
    }
    ctx.stroke();
  }
}

function makeShape(referenceXPoint: number, referenceYPoint: number): void {
  drawUpperLeft(referenceXPoint, referenceYPoint);
  drawUpperRight(referenceXPoint, referenceYPoint);
  drawLowerLeft(referenceXPoint, referenceYPoint);
  drawLowerRight(referenceXPoint, referenceYPoint);
}

function drawUpperLeft(referenceXPoint: number, referenceYPoint: number): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  for (let drawUpperLeft: number = 1; drawUpperLeft <= canvas.width / divideCanvasBy; drawUpperLeft++) {
    if (drawUpperLeft % spaceBetweenShapeLines === 0) {
      ctx.moveTo(referenceXPoint + drawUpperLeft / 2, canvas.height / 2 + referenceYPoint);
      ctx.lineTo(referenceXPoint + canvas.width / 2, (canvas.height - drawUpperLeft) / 2 + referenceYPoint);
    }
    ctx.stroke();
  }
}

function drawUpperRight(referenceXPoint: number, referenceYPoint: number): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  for (let drawUpperRight: number = 1; drawUpperRight <= canvas.width / divideCanvasBy; drawUpperRight++) {
    if (drawUpperRight % spaceBetweenShapeLines === 0) {
      ctx.moveTo(referenceXPoint + canvas.height - drawUpperRight / 2, canvas.height / 2 + referenceYPoint);
      ctx.lineTo(referenceXPoint + (canvas.height / 2), (canvas.height / 2) - drawUpperRight / 2 + referenceYPoint);
    }
    ctx.stroke();
  }
}

function drawLowerLeft(referenceXPoint: number, referenceYPoint: number): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  for (let drawLowerLeft: number = 1; drawLowerLeft <= canvas.width / divideCanvasBy; drawLowerLeft++) {
    if (drawLowerLeft % spaceBetweenShapeLines === 0) {
      ctx.moveTo(referenceXPoint + drawLowerLeft / 2, canvas.width / 2 + referenceYPoint);
      ctx.lineTo(referenceXPoint + canvas.width / 2, (canvas.width + drawLowerLeft) / 2 + referenceYPoint);
    }
    ctx.stroke();
  }
}

function drawLowerRight(referenceXPoint: number, referenceYPoint: number): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  for (let drawLowerRight: number = 1; drawLowerRight <= canvas.width / divideCanvasBy; drawLowerRight++) {
    if (drawLowerRight % spaceBetweenShapeLines === 0) {
      ctx.moveTo(referenceXPoint + canvas.height - drawLowerRight / 2, canvas.height / 2 + referenceYPoint);
      ctx.lineTo(referenceXPoint + (canvas.height / 2), (canvas.height / 2) + drawLowerRight / 2 + referenceYPoint);
    }
    ctx.stroke();
  }
}

divideCanvas();
putInside();