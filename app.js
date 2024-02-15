// I learned how to set up the Canvas in HTML and JS 
// using a tutorial on the CodingNepal YouTube channel, 
// which is linked here: https://www.youtube.com/watch?v=y84tBZo8GFo. 

// SET UP CANVAS 
const canvas = document.querySelector(".my-canvas");
const ctx = canvas.getContext("2d");

// VARS RELATED TO BRUSH 
let isDrawing = false; 
let brushSize = 2;


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
  ctx.strokeStyle = 'black';
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

// APPLICATION 

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);