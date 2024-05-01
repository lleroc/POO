//ejecuto todo el programa
var teclado = require("prompt-sync")();
//Declaración de la fruteria
var Fruteria = require("./Fruteria");
var frutas = new Fruteria(); //Instacia
//Declaración de las Frutas
var Claudia = require("./Frutas/Claudia");
var Fresa = require("./Frutas/Fresa");
var Mango = require("./Frutas/Mango");
var Manzana = require("./Frutas/Manzana");
var Mora = require("./Frutas/Mora");
var Pera = require("./Frutas/Pera");

console.log("Bienvenido a la Fruteria XXX");
console.log("Escriba el numero de la opción que desea guradar");
console.log("*** MENU ***");
console.log("1) Claudia");
console.log("2) Fresa");
console.log("3) Mango");
console.log("4) Manzana");
console.log("5) Mora");
console.log("6) Pera");
//La elección de la opción
var opcion = teclado("Ingrese una opción: ");
//Información de la fruta
var id = teclado("Ingrese el numero de fruta: ");
var peso = teclado("Ingrese el peso: ");
var color = teclado("Ingrese el color: ");
var estado = teclado("Ingrese el estado: ");

if (opcion == 1) {
  var claudia = new Claudia(id, peso, color, estado);
  frutas.guardarFruta(claudia);
} else if (opcion == 2) {
  var fresa = new Fresa(id, peso, color, estado);
  frutas.guardarFruta(fresa);
} else if (opcion == 3) {
  var mango = new Mango(id, peso, color, estado);
  frutas.guardarFruta(mango);
} else if (opcion == 4) {
  var manzana = new Manzana(id, peso, color, estado);
  frutas.guardarFruta(manzana);
} else if (opcion == 5) {
  var mora = new Mora(id, peso, color, estado);
  frutas.guardarFruta(mora);
} else {
  var pera = new Pera(id, peso, color, estado);
  frutas.guardarFruta(pera);
}
