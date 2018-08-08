'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let lineArray1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];

let lineArray2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectLines(cordList: number[][]) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();

    ctx.moveTo(cordList[0][0], cordList[0][1]);
    ctx.lineTo(cordList[1][0], cordList[1][1]);
    ctx.lineTo(cordList[2][0], cordList[2][1]);

    ctx.moveTo(cordList[2][0], cordList[2][1]);
    ctx.lineTo(cordList[3][0], cordList[3][1]);
    ctx.lineTo(cordList[0][0], cordList[0][0]);
    ctx.stroke();
}

function connectLongerArray(cordList: number[][]) {

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(cordList[0][0], cordList[0][1]);
    ctx.lineTo(cordList[1][0], cordList[1][1]);
    ctx.lineTo(cordList[2][0], cordList[2][1]);

    ctx.moveTo(cordList[2][0], cordList[2][1]);
    ctx.lineTo(cordList[3][0], cordList[3][1]);
    ctx.lineTo(cordList[4][0], cordList[4][1]);

    ctx.moveTo(cordList[4][0], cordList[4][1]);
    ctx.lineTo(cordList[5][0], cordList[5][1]);
    ctx.lineTo(cordList[6][0], cordList[6][1]);

    ctx.moveTo(cordList[6][0], cordList[6][1]);
    ctx.lineTo(cordList[7][0], cordList[7][1]);
   
    ctx.lineTo(cordList[0][0], cordList[0][1]);

    ctx.stroke();

}

connectLines(lineArray1);
connectLongerArray(lineArray2);