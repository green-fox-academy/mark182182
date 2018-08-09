'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function makeShape() {
    drawBottomLine();
    drawTopLine();
}

function drawBottomLine() {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    for (let drawIt = 0; drawIt <= canvas.width; drawIt++) {
        if (drawIt % 50 == 0) {
            ctx.moveTo(0, drawIt);
            ctx.lineTo(drawIt, canvas.width);
        }
        ctx.stroke();
    }
}

function drawTopLine() {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    for (let drawIt = 0; drawIt <= canvas.width; drawIt++) {
        if (drawIt % 50 == 0) {
            ctx.moveTo(drawIt, 0);
            ctx.lineTo(canvas.width, drawIt);
        }
        ctx.stroke();
    }
}

makeShape();