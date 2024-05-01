class Ferreteria {
  constructor() {
    this.productos = [];
  }
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  listarProductos() {
    console.log(this.productos);
  }
  descuento(subTotal) {
    var descuento = 0.1;
    var valorDescuento = subTotal * descuento;
    var total = subTotal - valorDescuento;
    return total;
  }
}
module.exports = Ferreteria;
