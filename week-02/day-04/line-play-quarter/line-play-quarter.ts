'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const renderTime = document.getElementById('renderTime');
const divisionRange = document.getElementById('start');
const showLineRange = document.getElementById('showLineRange');

divisionRange.onchange = (function () { location.reload(); });

const spaceBetweenShapeLines: number = 12;
let divideCanvasBy: number = 4;

divideCanvasBy = divisionRange.value;
showLineRange.value = divideCanvasBy;

window.addEventListener("load", loadTime, false);

function loadTime() {
    let now = new Date().getTime();
    let page_load_time = (now - performance.timing.navigationStart);
    if (window.console) {
        renderTime.value = (page_load_time / 1000);
    }
}

if (divideCanvasBy > canvas.height || divideCanvasBy > canvas.width) {
    canvas.height = divideCanvasBy;
    canvas.width = divideCanvasBy;
}

function putInside(): void {
    for (let drawRows: number = 0; drawRows < canvas.width; drawRows += canvas.width / divideCanvasBy) {
        for (let drawShapes: number = 0; drawShapes < canvas.width; drawShapes++) {
            makeShape(canvas.width / divideCanvasBy * drawShapes, drawRows);
        }
    }
}

function divideCanvas(): void {
    ctx.beginPath();
    for (let drawLines: number = 1; drawLines < canvas.width; drawLines++) {
        if (drawLines % (canvas.width / divideCanvasBy) == 0) {
            ctx.moveTo(drawLines, 0);
            ctx.lineTo(drawLines, canvas.width);
        }
    }
    for (let drawLines: number = 1; drawLines < canvas.width; drawLines++) {
        if (drawLines % (canvas.width / divideCanvasBy) == 0) {
            ctx.moveTo(0, drawLines);
            ctx.lineTo(canvas.width, drawLines);
        }
        ctx.stroke();
    }
}

function makeShape(referenceXPoint: number, referenceYPoint: number): void {
    drawBottomLine(referenceXPoint, referenceYPoint);
    drawTopLine(referenceXPoint, referenceYPoint);
}

function drawBottomLine(referenceXPoint: number, referenceYPoint: number): void {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    for (let drawBottom: number = 0; drawBottom <= canvas.width / divideCanvasBy; drawBottom++) {
        if (drawBottom % spaceBetweenShapeLines === 0) {
            ctx.moveTo(referenceXPoint, drawBottom + referenceYPoint);
            ctx.lineTo(drawBottom + referenceXPoint, canvas.width / divideCanvasBy + referenceYPoint);
        }
        ctx.stroke();
    }
}

function drawTopLine(referenceXPoint: number, referenceYPoint: number): void {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    for (let drawTop: number = 0; drawTop <= canvas.width / divideCanvasBy; drawTop++) {
        if (drawTop % spaceBetweenShapeLines === 0) {
            ctx.moveTo(drawTop + referenceXPoint, referenceYPoint);
            ctx.lineTo(canvas.width / divideCanvasBy + referenceXPoint, drawTop + referenceYPoint);
        }
        ctx.stroke();
    }
}

divideCanvas();
putInside();