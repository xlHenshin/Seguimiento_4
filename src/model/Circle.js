class Circle extends Figure{

    constructor(posx, posy, number){
       
        super(posx,posy,number);
        this.speed= random(1,3);
        this.value=int(random(1,10));

    }

    drawCircle(posx){
        fill(255,0,0);
        ellipse(posx,this.posy,50,50);
    }

    moveCircle(){

        this.posy+=this.speed;
        if(this.posy>184-50 || this.posy<0){
            this.speed= -this.speed;
        }
    }

    getValue(){
        return this.value
    }
}