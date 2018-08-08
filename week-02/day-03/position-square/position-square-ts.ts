'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawRectOnCanvas(xCord: number, yCord: number, color: string) {
    for (let drawIt = 1; drawIt <= 3; drawIt++) {
        ctx.fillStyle = color;
        ctx.fillRect(xCord + 50 * drawIt, yCord + 50 * drawIt, 50, 50);
    }
}

drawRectOnCanvas(0, 0, 'green');