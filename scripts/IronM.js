class IronM{

    constructor(app,x,y,logica){
        this.app = app;
        this.x = x;
        this.y = y;
        this.logica = logica;
        this.vida = 50;
        this.golpe = 20;
        this.balas = [];

        this.Iron = this.app.loadImage("/images/PNG_s/Chapas1.png");
        this.disparar = this.disparar.bind(this);
        setInterval(this.disparar,500);
    }

    pintar(){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.Iron,this.x,this.y, this.Iron.width / 3, this.Iron.height / 3);
        this.app.imageMode(this.app.CORNER);
            for (let i = 0; i < this.balas.length; i++) {
        this.balas[i].pintar();
    }
}

    disparar(){
        for (let i = 0; i < this.logica.Linterna.length; i++) {
            if(this.logica.Linterna[i].x < this.app.width && this.logica.Linterna[i].x > this.x && this.logica.Linterna[i].y == this.y){
                this.balas.push(new Bala(this.app,this.x+50,this.y));
            }
        }
        for (let i = 0; i < this.logica.Superman.length; i++) {
            if(this.logica.Superman[i].x < this.app.width  && this.logica.Superman[i].x > this.x && this.logica.Superman[i].y == this.y){
                this.balas.push(new Bala(this.app,this.x+50,this.y));
            }
        }
        
            
       
    }

    getBalas(){
        return this.balas;
    }
}