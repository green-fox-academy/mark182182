'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const centerX: number = canvas.width / 2;
const centerY: number = canvas.height / 2;


function drawTriangleFractal(centerX: number, centerY: number) {
  ctx.beginPath();
  ctx.save();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(0, 0);
  ctx.stroke();
  drawTriangleFractal(centerX + 10, centerY + 10);
  ctx.restore();
}
drawTriangleFractal(centerX, centerY);

// tree fractal
// function draw(startX, startY, len, angle) {
//   ctx.shadowBlur = 15;
//   ctx.shadowColor = "rgba(0,0,0,0.8)";

//   ctx.beginPath();
//   ctx.save();

//   ctx.translate(startX, startY);
//   ctx.rotate(angle * Math.PI / 180);
//   ctx.moveTo(0, 0);
//   ctx.lineTo(0, -len);
//   ctx.stroke();
//   if (angle > 0) {
//     ctx.bezierCurveTo(10, -len / 2, 10, -len / 2, 0, -len);
//   } else {
//     ctx.bezierCurveTo(-10, -len / 2, -10, -len / 2, 0, -len);
//   }
//   if (len < 10) {
//     ctx.restore();
//     return;
//   }

//   draw(0, -len, len * 0.8, -15);
//   draw(0, -len, len * 0.8, 15);

//   ctx.restore();
// }

// draw(350, 600, 120, 0);