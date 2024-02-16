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
const purpleButton = document.querySelector('#purple-button');
const yellowButton = document.querySelector('#yellow-button');
const pinkButton = document.querySelector('#pink-button');
const orangeButton = document.querySelector("#orange-button");
const grayButton = document.querySelector('#gray-button');
const brownButton = document.querySelector('#brown-button');

// VARS RELATED TO BRUSH SIZE 
const sizeOne = document.querySelector("#size-1");
const sizeTwo = document.querySelector("#size-2");
const sizeThree = document.querySelector("#size-3");
const sizeFour = document.querySelector("#size-4");
const sizeFive = document.querySelector("#size-5");
const sizeSix = document.querySelector("#size-6");
const sizeMultiplier = 2;

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

// METHODS FOR BRUSH OPTIONS
const changeColor = (color) => {
  currentColor = color;
}

const changeBrushSize = (size) => {
  brushSize = size;
}



// APPLICATION 

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);

// change brush stroke color
whiteButton.addEventListener('click', () => changeColor('white'));
blackButton.addEventListener('click', () => changeColor('black'));
redButton.addEventListener('click', () => changeColor('red'));
greenButton.addEventListener('click', () => changeColor('green'));
blueButton.addEventListener('click', () => changeColor('blue'));
purpleButton.addEventListener('click', () => changeColor('purple'));
yellowButton.addEventListener('click', () => changeColor('yellow'));
pinkButton.addEventListener('click', () => changeColor('pink'));
orangeButton.addEventListener('click', changeColor('orange'));
grayButton.addEventListener('click', changeColor('gray'));
brownButton.addEventListener('click', changeColor('brown'));

// change brush stroke size 
sizeOne.addEventListener('click', () => changeBrushSize(1 * sizeMultiplier));
sizeTwo.addEventListener('click', () => changeBrushSize(2 * sizeMultiplier));
sizeThree.addEventListener('click', () => changeBrushSize(3 * sizeMultiplier));
sizeFour.addEventListener('click', () => changeBrushSize(4 * sizeMultiplier));
sizeFive.addEventListener('click', () => changeBrushSize(5 * sizeMultiplier));
sizeSix.addEventListener('click', () => changeBrushSize(6 * sizeMultiplier));