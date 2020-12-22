var backgroundImage;
var form;

let font;

function preload(){
    backgroundImage = loadImage("background/background.001.jpeg");
}

function setup(){
    createCanvas(windowWidth-800, windowHeight-150);

    form = new Form();
    form.display();
}

function draw(){
    background(backgroundImage);
    
} 