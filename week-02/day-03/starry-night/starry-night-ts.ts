'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);
let pickColor: number = Math.round(Math.random() * 255);
let colors = "rgb(" + pickColor + "," + pickColor + "," + pickColor + ")";
function drawRectOnCanvas(size: number, colors: string) {

    for (let drawIt = 0; drawIt < canvas.height; drawIt++) {
        ctx.fillStyle = colors;
        ctx.fillRect(Math.random() * (drawIt * canvas.width / size), Math.random() * (drawIt * canvas.width / size), size, size);
    }
}

drawRectOnCanvas(20, colors);