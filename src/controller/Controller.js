let logic;

class Controller{

    constructor(){
        logic=new Logic(this);
    }

    draw(){
        logic.draw();
    }

    mouse(){
        logic.mouse();
    }

    key(){
        logic.key();
    }
}