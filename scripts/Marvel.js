class Marvel{

    constructor(app, tipo){
        this.app = app;
        this.tipo = tipo;

        this.Irons = [];
        this.Caps = [];
        this.Thors = [];
    }

    pintar(){

    }

    añadir(){
        if(this.tipo == 1){
            this.Irons.push(new IronM());
        }
    }
}