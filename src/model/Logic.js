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

            rect(80,700,125,50);
            rect(250,700,125,50);
            rect(420,700,125,50);
            rect(590,700,125,50);
            text("Agregar",105,730);
            text("Quitar",285,730);
            text("Agrandar",442,730);
            text("Círculos",615,730);
            break;

            case 1:

            rect(120,450,125,50);
            rect(290,450,125,50);
            rect(460,450,125,50);
            rect(630,450,125,50);
            text("Agregar",120,480);
            text("Quitar",290,480);
            text("Agrandar",460,480);
            text("Círculos",630,480);

            for (let i = 0; i < this.figure.length; i++) {
            
                this.figure[i].drawFigure((70*i)+70);
                this.figure[i].move();
            }

            break;
    
        default:
            break;
    }
}

mouseClicked(){

    switch (this.screen) {
        case 0:

            if(mouseX >= 265 && mouseX <- 265+20)
            
            break;

        case 1:
            
            break;
    
        default:
            break;
    }
}

}