let logic;

function setup(){
createCanvas(800,800);
logic=new Logic(this);
}

function draw(){
    background(0);
    logic.draw();
}

function mouseClicked(){
    console.log(mouseX,mouseY);
    logic.mouse();
}

function keyPressed(){
    logic.key();
}