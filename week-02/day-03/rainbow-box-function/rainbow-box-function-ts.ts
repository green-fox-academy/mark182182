'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow coloreds squares.

function drawRectOnCanvas(size: number, colors: string[]) {
    for (let drawIt = 0; drawIt < canvas.height; drawIt++) {
        ctx.fillStyle = colors[drawIt % colors.length];
        ctx.fillRect(300 + size, 200 + size, size, size);
    }
}

drawRectOnCanvas(20, ['red', 'green', 'blue', 'yellow', 'purple']);