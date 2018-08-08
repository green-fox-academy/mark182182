'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawRectOnCanvas(size: number, colors: string[]) {
    for (let drawIt = 0; drawIt < canvas.height / 2; drawIt++) {
        if (drawIt * size > canvas.height / 2) {
        }
        else {
            ctx.fillStyle = colors[drawIt % colors.length];
            ctx.fillRect((drawIt * size) * 2, (drawIt * size) * 2, drawIt * size, drawIt * size);
            // ctx.strokeRect(size, size, size, size);
        }
    }
}

drawRectOnCanvas(20, ['purple']);