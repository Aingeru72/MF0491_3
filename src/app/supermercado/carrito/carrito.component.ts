import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoCarrito } from '../../model/producto-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // Atributos
  @Input('productoAniadido') productoAniadido: ProductoCarrito;
  @Output() productoIncrementado = new EventEmitter();
  @Output() productoDecrementado = new EventEmitter();
  @Output() productoBorrado = new EventEmitter();
  listaCompra: ProductoCarrito[];

  constructor() {
    console.log('CarritoComponent.constructor(%o)', this.productoAniadido);
    this.productoAniadido = new ProductoCarrito(new Producto('Producto'), 1);
    this.listaCompra = [];
  }

  ngOnInit() {
    console.log('CarritoComponent.ngOnInit()');
    this.rellenarCarrito();
    // tslint:disable-next-line:no-console
    console.debug('listaCompra: %o', this.listaCompra);
  }

  rellenarCarrito() {

    this.listaCompra.push(this.productoAniadido);

    /* this.listaCompra.forEach(element => {
      // Obtener la posición del producto en caso de contener ya ese tipo de producto
      const index = this.contieneProducto(element);

      if ( index !== -1  ) {
        this.prodCarrito = new Producto(
          element.nombre,
          element.imagen,
          element.precio,
          element.precioUnidad,
          element.oferta,
          element.unidades,
          element.id
        );
        this.carrito.push(nuevoProducto);
      } else {
        this.carrito[index].unidades += element.unidades;
      }
      // tslint:disable-next-line:no-console
      console.debug(
        'Carrito: %o', this.carrito + '\n' +
        'Nuevo Producto añadido: %o', nuevoProducto
      );
    }); */
  }

  /**
   * Devuelve la posición del nuevo producto en el carrito, o '-1' si no lo encuentra
   * @param prodCarrito : Producto nuevo a añadir
   */
  /* contieneProducto(prodCarrito: Producto): number {
    let indice = -1;

    this.carrito.forEach((element, index) => {
      if (element === prodCarrito) {
        indice = index;
      }
    });

    return indice;
  } */

  /**
   * Aumentar unidades del producto
   */
  aumUnidad(event) {
    this.productoAniadido.unidades++;
    console.log('ProductoComponent.aumUnidad(%s)', event.unidades);

    this.productoIncrementado.emit({
      'producto': this.productoAniadido.producto,
      'unidades': this.productoAniadido.unidades
    });
  }

  /**
   * Decrecer unidades del producto
   */
  decUnidad(event) {
    this.productoAniadido.unidades--;
    console.log('ProductoComponent.decUnidad(%s)', event.unidades);

    this.productoDecrementado.emit({
      'producto': this.productoAniadido.producto,
      'unidades': this.productoAniadido.unidades
    });
  }

  /**
   * Borra el elemento seleccionado de la lista desplegable del carrito
   * @param prodCarrito : Producto a borrar
   */
  /* borrarDelCarrito(prodCarrito: Producto): void {
    console.log('CarritoComponent.borrarDelCarrito(%o)', prodCarrito);

    const index = this.contieneProducto(prodCarrito);
    this.carrito.splice(index, 1);
    this.productoBorrado.emit({
      'producto': this.prodCarrito
    });

  } */

}
