var bg;
function preload(){
  bg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,500);
 
}

function draw() {
  background(bg);  
  drawSprites();
}