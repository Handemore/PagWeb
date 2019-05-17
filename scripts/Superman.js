class Superman{

    constructor(app,x,y){
        this.app = app;
        this.x = x;
        this.y = y;
        this.vel = 3;
        this.superman = this.app.loadImage("/images/PNG_s/Superman.png");
        this.vida= 100;

    }

    pintar(){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.superman,this.x,this.y,this.superman.width/3,this.superman.height/3);
        this.mover();
        this.app.imageMode(this.app.CORNER);
    }

    mover(){
        this.x -= this.vel;
    }

    validarChoque(){
        this.vida-= 20;
        //Aqui el 20 se hace por la variable daño
    }
}