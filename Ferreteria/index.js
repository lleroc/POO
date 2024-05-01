//arcvhivo para ejecutar el programa
var teclado = require("prompt-sync")();
//llamar al archivo de ferreteria
var Ferreteria = require("./Ferreteria");
var productos = new Ferreteria();
//llamar a los arhcivos de los productos
//estos archivos se ingresan varias veces
var Cemento = require("./Productos/Cemento");
var Clavo = require("./Productos/Clavo");
//
console.log("Bienvenido a la Ferreteria XXX");
console.log("Escriba el numero de la opción que desea realizar");
do {
  console.log("*** MENU ***");
  console.log("1) Cemento");
  console.log("2) Clavos");
  console.log("3) Listar Prodcutos");
  //La elección de la opción
  var opcion = teclado("Ingrese una opción: ");
  //Información de la fruta
  if (opcion == 1) {
    var peso = teclado("Ingrese el peso: ");
    var marca = teclado("Ingrese la marca: ");
    var valor = teclado("Ingrese el valor: ");
    var cemento = new Cemento(peso, marca, valor);
    productos.agregarProducto(cemento);
  } else if (opcion == 2) {
    var tipo = teclado("Ingrese el tipo: ");
    var color = teclado("Ingrese el color: ");
    var tamanio = teclado("Ingrese el tamaño: ");
    var valor = teclado("Ingrese el valor: ");
    var clavo = new Clavo(tipo, color, tamanio, valor);
    productos.agregarProducto(clavo);
  } else {
    productos.listarProductos();
  }
  console.log(
    "Desea ingresar otra producto o desea vender. \n 1) Vender \n 2) Ingresar Productos"
  );
  var salir = teclado();
} while (salir == 2);
//ventas
do {
  console.log("*** MENU de Productos***");
  console.log("1) Cemento");
  console.log("2) Clavos");
  var comprar = teclado("Que desea comprar: ");
  var cementoVenta = new Cemento(productos.listarProductos([0]));
  console.log(cementoVenta.marca);
  console.log(cementoVenta.peso);
  console.log(cementoVenta.valor);
} while (salir == 2);
