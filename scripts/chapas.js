class chapas{

    constructor(app,tipo,x){
        this.app = app;
        this.x = x;
        this.tipo = tipo;
        this.chapa = this.app.loadImage("/images/PNG_s/Chapas.png");
        this.chapitas = [];
        for (let i = 1; i < 4; i++) {
            this.chapitas.push(this.app.loadImage("/images/PNG_s/Chapas"+i+".png"));
        }
        this.IronM = this.app.loadImage("/images/PNG_s/Iron Man.png");
        this.Thor = this.app.loadImage("/images/PNG_s/Thor.png");
        this.CapA = this.app.loadImage("/images/PNG_s/Capitan America.png");
    }

    pintar(){
        this.app.image(this.chapa,this.x,0);

        this.app.image(this.IronM,30,60,this.IronM.width/5,this.IronM.height/5);
        this.app.image(this.Thor,185,60,this.Thor.width/5,this.Thor.height/5);
        this.app.image(this.CapA,330,60,this.CapA.width/7,this.CapA.height/5);

    }

    /*SeleccionChapa(){
        this.app.imageMode(this.app.CENTER);
        switch(this.tipo){
            case 1: 
                this.app.image(this.chapitas[this.tipo],this.app.mouseX,this.app.mouseY);
            break;
            case 2:
                this.app.image(this.chapitas[this.tipo],this.app.mouseX,this.app.mouseY);
            break;
            case 3:
                this.app.image(this.chapitas[this.tipo],this.app.mouseX,this.app.mouseY);
            break;
        }
        this.app.imageMode(this.app.CORNER);
         // this.app.image(this.chapitas,this.x,0);
    }*/

}