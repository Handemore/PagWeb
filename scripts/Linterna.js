class Linterna{

    constructor(app,x,y,logica){
        this.app = app;
        this.x = x;
        this.y = y;
        //this.IronM = IronM;
        this.logica = logica;
        this.vel = 3;
        this.linterna = this.app.loadImage("/images/PNG_s/Linterna Verde.png");
        this.vida= 200;

    }

    pintar(){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.linterna,this.x,this.y,this.linterna.width/3,this.linterna.height/3);
        this.mover();
        this.app.imageMode(this.app.CORNER);
        //this.validarChoque();
    }

    mover(){
        this.x -= this.vel;
    }

    choque(){
        this.vida-= 100;
        //Aqui el 20 se hace por la variable daño debe ser un dist
    }
    getVida(){
        return this.vida;
    }
}