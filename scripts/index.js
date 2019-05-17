new p5(function(app){
    var logica;

    app.setup = function() {
        logica = new Logica(app);
    }
    
    app.draw = function() {
        logica.pintar();
    }

    app.mousePressed = function(){
        logica.oprimido();
    }

    app.mouseReleased = function(){
        logica.soltado();
    }

    app.keyPressed = function(){
        logica.tecla();
    }
});