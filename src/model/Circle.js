class Circle{

    constructor(posx, posy, size){
        this.posx=posx;
        this.posy=posy;
        this.size=size;
        figure = new Figure(this)
    }

    draw(){
        fill(255,0,0);
        ellipse(this.posx,this.posy,this.size,this.size);
    }
}