class Bala{

    constructor(app,x,y){
        this.app = app;
        this.x = x;
        this.y = y;
        this.vel = 5;
    }

    pintar(){
        this.app.fill(20,100,200);
        this.app.circle(this.x, this.y, 20);
        this.mover();
    }

    mover(){
        this.x+=this.vel;
    }
}