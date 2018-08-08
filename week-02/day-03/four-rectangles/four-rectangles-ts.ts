'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRectOnCanvas(wSize: number, hSize: number, color: string) {
    for (let drawIt = 1; drawIt <= 4; drawIt++) {
        ctx.fillStyle = color;
        ctx.fillRect(drawIt * 100, 120, wSize, hSize);
    }
}

drawRectOnCanvas(10, 10, 'green');