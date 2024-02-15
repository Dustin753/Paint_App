// I learned how to set up the Canvas in HTML and JS 
// using a tutorial on the CodingNepal YouTube channel, 
// which is linked here: https://www.youtube.com/watch?v=y84tBZo8GFo. 

// RESOURCES
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
// https://www.w3schools.com/graphics/canvas_intro.asp

// SET UP CANVAS 
const canvas = document.querySelector(".my-canvas");
const ctx = canvas.getContext("2d");

// VARS RELATED TO BRUSH 
let isDrawing = false; 
let brushSize = 2;
let currentColor = 'black';

// VARS RELATED TO COLORS 
const whiteButton = document.querySelector("#white-button");
const blackButton = document.querySelector("#black-button");
const redButton = document.querySelector("#red-button");
const greenButton = document.querySelector("#green-button");
const blueButton = document.querySelector("#blue-button");

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

// METHODS
// METHODS FOR DRAWING 
const startDrawing = () => {
  isDrawing = true; 
  ctx.beginPath(); // This starts the drawing where the mousedown event occurs
  ctx.lineWidth = brushSize; 
  ctx.strokeStyle = currentColor;
}

const stopDrawing = () => {
  isDrawing = false;
}

const drawing = (e) => {
  if(!isDrawing){
    return;
  } 
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

// METHODS FOR CHOOSING COLORS
const changeColor = (color) => {
  currentColor = color;
}



// APPLICATION 

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);

whiteButton.addEventListener('click', () => changeColor('white'));
blackButton.addEventListener('click', () => changeColor('black'));
redButton.addEventListener('click', () => changeColor('red'));
greenButton.addEventListener('click', () => changeColor('green'));
blueButton.addEventListener('click', () => changeColor('blue'));