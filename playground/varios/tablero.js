var Posicion = function (x, y) {
    this.x = x
    this.y = y
}

var bola = new Posicion(0, 0);

//Metodos de movimiento
Posicion.prototype.arriba = function () {
    this.y += 1;
}

Posicion.prototype.abajo = function () {
    this.y -= 1;
}

Posicion.prototype.izquierda = function () {
    this.x -= 1;
}

Posicion.prototype.izquierda = function () {
    this.x += 1;
}



console.log(tablero);