let logic;

function setup(){
createCanvas(800,800);
logic=new Logic(this);
}

function draw(){
    background(155);
    logic.draw();
}

function mousePressed(){
    console.log(mouseX,mouseY);
    logic.mouse();
}