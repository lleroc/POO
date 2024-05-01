//guardar los frutas
class Fruteria {
  constructor() {
    this.frutas = [];
  }
  guardarFruta(fruta) {
    this.frutas.push(fruta);
  }
  obtenerFrutas() {
    return this.frutas;
  }
}

module.exports = Fruteria;
//npm init --y
//npm i prompt-sync
