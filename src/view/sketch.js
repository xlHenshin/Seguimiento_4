let circulo;

function setup(){
createCanvas(800,800);
circulo=new Figura(400,400,100);
}

function draw(){
    background(0);
    circulo.draw();
}