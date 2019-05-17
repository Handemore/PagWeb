class Thor{

    constructor(app,x,y){
        this.app = app;
        this.x = x;
        this.y = y;
        this.vida = 100;
        this.golpe = 10;

        this.ThorI = this.app.loadImage("./images/PNG_s/Chapas2.png");
    }

    pintar(){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.ThorI,this.x,this.y, this.ThorI.width / 3, this.ThorI.height / 3);
        this.app.imageMode(this.app.CORNER);
    }

    disparar(){
        this.app.circle(this.x, this.y, 50);
    }
    
}