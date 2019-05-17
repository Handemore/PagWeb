class seleccion {

    constructor(app) {
        this.app = app;
        this.imagenes = [];
        for (let i = 1; i < 4; i++) {
            this.imagenes.push(this.app.loadImage("/images/PNG_S/Chapas" + i + ".png"));
        }
    }


    pintar() {
        this.x = this.app.mouseX;
        this.y = this.app.mouseY;
        this.app.imageMode(this.app.CENTER);
        if (this.tipo != null) {
            this.app.image(this.imagenes[this.tipo], this.x, this.y, this.imagenes[this.tipo].width / 3, this.imagenes[this.tipo].height / 3);
        }

        this.app.imageMode(this.app.CORNER);
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    getImg() {
        if (this.tipo != null) {
            return this.imagenes[this.tipo];
        } else {
            return null;
        }
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getTipo(){
        return this.tipo;
    }

}