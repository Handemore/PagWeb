class Enemigos{

    constructor(app,tipo){
        this.app = app;
        this.tipo = tipo;
        this.Ys = [250 , 430 , 610];
        this.vel = 5;
        this.Supermans = [];
        this.Linternas = [];
        this.y = null;
        this.x = 500;

        for (let i = 0; i < this.Ys.length; i++) {
            this.Ys[i] = this.y;
        }


    }

    dibujar(){
        for (let i = 0; i < this.Supermans.length; i++) {
            this.Supermans[i].pintar();
            this.Supermans[i].mover();
          }

    }

    crear(){
          switch(this.tipo){
            case 0:
                this.Supermans.push(new Superman(this.app,this.x,this.y));
            break;
            case 1:
                this.Linternas.push(new Superman(this.app,this.x,this.y));
            break;
            /*Case 2:
                this.Supermans.push(new Superman(this.app,this.x,));
            break;*/
        }
        
    }

    eliminar(){

    }
}