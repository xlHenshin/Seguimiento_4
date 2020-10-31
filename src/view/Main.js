
let controller;

function setup(){
createCanvas(800,800);
controller=new Controller();
}

function draw(){
    background(0);
    controller.draw();
}

function mouseClicked(){
    console.log(mouseX,mouseY);
    controller.mouse();
}

function keyPressed(){
    controller.key();
}