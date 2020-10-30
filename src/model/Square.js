class Square extends Figure{
    
    constructor(posx,posy,number){

        super(posx,posy,number);
        this.speed= random(1,3);
        this.value=int(random(1,10));

    }

    drawFigure(posx){
        rect(posx,this.posy,50,50);
        text(this.value.posx+20,this.posy+30);
    }

    move(){

        this.posy+=this.speed;
        if(this.posy>184-50 || this.posy<0){
            this.speed= -this.speed;
        }
    }
}