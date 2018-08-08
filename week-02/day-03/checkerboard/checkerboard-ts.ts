'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.
function drawCheckboardOnCanvas() {
    for (let onCanvas = 0; onCanvas < canvas.height; onCanvas++) {
        if (onCanvas % 2 === 0) {
            drawFirstRowOnCanvas(20, onCanvas);
        }
        else if (onCanvas % 2 === 1) {
            drawSecondRowOnCanvas(20, onCanvas);
        }
    }
}
function drawFirstRowOnCanvas(size: number, rowNumber: number) {
    for (let drawFirst = 0; drawFirst < canvas.width; drawFirst++) {
        if (drawFirst % 2 === 0) {
            ctx.fillRect(drawFirst * size, rowNumber * size, size, size);
        }
        else {

        }
    }
}
function drawSecondRowOnCanvas(size: number, rowNumber: number) {
    for (let drawSecond = 0; drawSecond < canvas.width; drawSecond++) {
        if (drawSecond % 2 === 1) {
            ctx.fillRect(drawSecond * size, rowNumber * size, size, size);
        }
        else {

        }
    }
}

drawCheckboardOnCanvas();