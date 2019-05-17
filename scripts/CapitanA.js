class CapitanA{

    constructor(app,x,y,logica){

        this.app = app;
        this.x = x;
        this.y = y;
        this.BalaX = x;
        this.BalaY = y;
        this.vida = 200;
        this.golpe = 0;
        this.vel = 5;
        this.logica = logica;
        this.balas = [];
        
        this.Cap = this.app.loadImage("./images/PNG_s/Chapas3.png");
        this.disparar = this.disparar.bind(this);
        setInterval(this.disparar,1000);

    }

    pintar(){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.Cap,this.x,this.y, this.Cap.width / 3, this.Cap.height / 3);
        this.app.imageMode(this.app.CORNER);
        for (let i = 0; i < this.balas.length; i++) {
            this.balas[i].pintar();
            this.balas[i].mover();
        }
    }

    disparar(){
            if(this.logica){
            this.balas.push(new Bala(this.app,this.BalaX,this.BalaY));
    }}
    
}