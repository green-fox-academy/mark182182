'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
function fillCanvas(xCord: number, yCord: number) {
    for (let onTopCanvas = 0; onTopCanvas <= canvas.width - xCord * 2; onTopCanvas++) {
        if (onTopCanvas % 20 === 0) {
            drawLine(xCord + onTopCanvas, yCord);
        }

    }
    for (let onLeftCanvas = 0; onLeftCanvas <= canvas.height - yCord * 2; onLeftCanvas++) {
        if (onLeftCanvas % 20 === 0) {
            drawLine(xCord, yCord + onLeftCanvas);
        }
    }
    for (let onBottomCanvas = 0; onBottomCanvas <= canvas.width - xCord * 2; onBottomCanvas++) {
        if (onBottomCanvas % 20 === 0) {
            drawLine(xCord + onBottomCanvas, canvas.height - yCord);
        }
    }
    for (let onRightCanvas = 0; onRightCanvas <= canvas.height - yCord * 2; onRightCanvas++) {
        if (onRightCanvas % 20 === 0) {
            drawLine(canvas.width - xCord, yCord + onRightCanvas);
        }
    }
}

function drawLine(xCord: number, yCord: number) {
    if (xCord <= canvas.width && yCord <= canvas.height) {
        ctx.beginPath();
        ctx.moveTo(xCord, yCord);
        ctx.lineTo((canvas.width / 2), (canvas.height / 2));
        ctx.stroke();
    }
    else {
        console.log("Coordinates should be lower than the canvas size.");
    }


}

fillCanvas(0, 0);