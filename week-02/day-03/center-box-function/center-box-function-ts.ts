'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareDraw(size: number) {
    ctx.fillRect(300, 200, size, size);

}

for (let currentCord = 1; currentCord <= 3; currentCord++) {
    if (currentCord == 1) {
        ctx.fillStyle = 'green';
        squareDraw(30 + currentCord);
    }
    if (currentCord == 2) {
        ctx.fillStyle = 'blue';
        squareDraw(20 + currentCord);
    }
    if (currentCord == 3) {
        ctx.fillStyle = 'yellow ';
        squareDraw(10 + currentCord);
    }

}