var backgroundImage;
var form;

function preload(){
    backgroundImage = loadImage("background/background.001.jpeg")
}

function setup(){
    createCanvas(windowWidth-800, windowHeight-150);

    form = new Form();
}

function draw(){
    background(backgroundImage);
    form.display();
} 