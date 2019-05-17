class Logica{

    constructor(app){
        this.app = app;

        this.app.createCanvas(1200, 700);
        this.escenario = this.app.loadImage("/images/PNG_s/Escenario.png");
        this.tipoChapa = 0;
        this.torreta = false;
        this.seleccion = new seleccion(app, this.tipoSelec);

        this.Capitanes = [];
        this.IronManes = [];
        this.Thores = [];

        this.Superman = [];
        this.Linterna = [];

        this.chapitas = [];
        for (let i = 0; i < 3; i++) {
          this.chapitas[i] = new chapas(app,this.tipoChapa,i*150);
        }  

        
        //250 - 430 - 610 
        this.Ys = [250 , 430 , 610];
        // 80 - 240 - 400 - 560 - 720 - 880
        this.Xs = [80 , 240 , 400 , 560 , 720 , 880];

        this.radio = 80;
        this.crearEnemigo = this.crearEnemigo.bind(this);
        setInterval(this.crearEnemigo,1000);
    }

    pintar(){
        this.app.image(this.escenario,0,0);

        this.validarChoque();


        for (let i = 0; i < 6; i++) {
          for(let j = 0; j < 3; j++) {
            if(this.app.dist(this.Xs[i],this.Ys[j],this.app.mouseX,this.app.mouseY)<this.radio && this.seleccion.getImg() != null){
              this.app.imageMode(this.app.CENTER);
              this.app.tint(255,128);
              this.app.image(this.seleccion.getImg(),this.Xs[i],this.Ys[j],this.seleccion.getImg().width/3,this.seleccion.getImg().height/3);
              this.torreta = true;
              this.app.noTint();
              this.app.imageMode(this.app.CORNER);
            }
          }
        }  

        for (let i = 0; i < 3; i++) {
            this.chapitas[i].pintar();
          }  

          this.seleccion.pintar();

          for (let i = 0; i < this.Capitanes.length; i++) {
            this.Capitanes[i].pintar();
          }

          for (let i = 0; i < this.IronManes.length; i++) {
            this.IronManes[i].pintar();
          }

          for (let i = 0; i < this.Thores.length; i++) {
            this.Thores[i].pintar();
          }

          for (let i = 0; i < this.Linterna.length; i++) {
            this.Linterna[i].pintar();
          }  

          for (let i = 0; i < this.Superman.length; i++) {
            this.Superman[i].pintar();
          }  

          
    }

    oprimido(){

      if(this.app.mouseX>20 && this.app.mouseX<110 && this.app.mouseX>25 && this.app.mouseY<160){
          this.seleccion.setTipo(0);
          //this.seleccion.setPos(his.app.mouseX,this.app.mouseY);

      }
      
      if(this.app.mouseX>170 && this.app.mouseX<250 && this.app.mouseX>25 && this.app.mouseY<160){
        this.seleccion.setTipo(1);
        //this.seleccion.setPos(his.app.mouseX,this.app.mouseY);

      }

      if(this.app.mouseX>320 && this.app.mouseX<410 && this.app.mouseX>25 && this.app.mouseY<160){
        this.seleccion.setTipo(2);
        //this.seleccion.setPos(his.app.mouseX,this.app.mouseY);

      }
      
      for (let i = 0; i < 6; i++) {
        for(let j = 0; j < 3; j++) {
          if(this.app.dist(this.Xs[i],this.Ys[j],this.app.mouseX,this.app.mouseY)<this.radio && this.torreta == true){
            switch(this.seleccion.getTipo()){
              case 0:
                this.IronManes.push(new IronM(this.app,this.Xs[i],this.Ys[j],this));
                this.seleccion.setTipo(null);
              break;
              case 1:
                this.Thores.push(new Thor(this.app,this.Xs[i],this.Ys[j],this));
                this.seleccion.setTipo(null);  
              break;
              case 2:
                this.Capitanes.push(new CapitanA(this.app,this.Xs[i],this.Ys[j],this));
                this.seleccion.setTipo(null);
              break;
            }
          }
        }
      }  

    }

    crearEnemigo(){
      this.tipoEnemigo = Math.floor(this.app.random(0,2));
      this.PosX = 1300;
      //this.PosicionesY = [250 , 430 , 610];
      this.posicion = Math.floor(this.app.random(0,3));
      switch (this.posicion) {
        case 0:
          this.PosY = 250;
          break;
        case 1:
        this.PosY = 430;
          break;
        case 2:
        this.PosY = 610;
          break;
      }

      switch(this.tipoEnemigo){
        case 0:
            this.Superman.push(new Superman(this.app,this.PosX,this.PosY));
        break;
        case 1:
            this.Linterna.push(new Linterna(this.app,this.PosX,this.PosY,this));
        break;
      }
    }

    validarChoque(){
      for (let i = 0; i < this.IronManes.length; i++) {
        var balas = this.IronManes[i].getBalas();
        for (let j = 0; j < balas.length; j++) {
          var bala = balas[j];
          for (let l = 0; l < this.Linterna.length; l++) {
            var linterna = this.Linterna[l];
            if(this.app.dist(bala.x,bala.y,linterna.x,linterna.y) <20){
              this.Linterna[l].choque();
              balas.splice(balas[j],1);
              if(this.Linterna[l].getVida() <= 0){
                this.Linterna.splice(linterna[l],1);
              }
            }
          }
        }
      }
    }

    soltado(){

    }

    tecla(){
      //this.crearEnemigo();
    }

}