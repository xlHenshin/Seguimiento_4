class Logic{

    constructor(app){
       
        this.contador=0;
        this.screen=0;
        this.error=false;
        this.figure=[];
        //=======================
        this.position=[];
        this.position[0]=50;
        this.position[1]=120;
        this.position[2]=190;
        this.position[3]=260;
        this.position[4]=330;
        this.position[5]=400;
        this.position[6]=470;
        this.position[7]=540;
        this.position[8]=610;
        this.position[9]=680;
    }

draw(){

    switch (this.screen) {
        case 0:
            textSize(20);
            rect(380,450,50,20);
            rect(295,450,50,20);
            rect(465,450,50,20);
            rect(360,490,90,20);
            text("Continuar",362, 506);
            text(this.contador,400,468);
            text("+",485,467);
            text("-",315,465);
            textSize(20);

            if (this.error){
                text("ERROR 404",50,50);
            }

            break;

            case 1:
                rect(80,700,125,50);
                rect(250,700,125,50);
                rect(420,700,125,50);
                rect(590,700,125,50);
                text("Agregar",105,730);
                text("Quitar",285,730);
                text("Agrandar",442,730);
                text("Círculos",615,730);

            for (let i = 0; i < this.figure.length; i++) {
            
                this.figure[i].drawFigure((70*i)+70);
                this.figure[i].move();
            }

            break;
    
        default:
            break;
    }
}

mouse(){

    switch (this.screen) {
        case 0:

            if(mouseX >= 465 && mouseX <= 465+50
                && mouseY >= 450 && mouseY <= 450+20
                && this.contador < 10 ){
                    
                    this.contador += 1;
                }
           
            if(mouseX >= 295 && mouseX <= 295+50
                && mouseY >= 450 && mouseY <= 450+20
                && this.contador > 0 ){
                        
                    this.contador -= 1;
                }
        
            if(mouseX >= 360 && mouseX <= 360+90
                && mouseY >= 490 && mouseY <= 490+20
                && this.contador > 0 && this.contador < 10 ){
                    
                    this.screen=1;
                    
                    for (let i = 0; i < this.contador; i++) {
                        
                        this.figure.push(new Square(this.position[this.pos],100,this.contador));
                        console.log(this.contador);
                    }
                }
            
            break;

        case 1:
            
            break;
    
        default:
            break;
    }
}

}