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

  /**
   * Añade el producto recien añadido al carrito y lo muestra
   */
  rellenarCarrito() {
    console.log('CarritoComponent.rellenarCarrito()');
    this.listaCompra.push(this.productoAniadido);
  }

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
    if ( this.productoAniadido.unidades > 1) {
      this.productoAniadido.unidades--;
      console.log('ProductoComponent.decUnidad(%s)', event.unidades);

      this.productoDecrementado.emit({
        'producto': this.productoAniadido.producto,
        'unidades': this.productoAniadido.unidades
      });
    } else {
      this.borrarDelCarrito(this.productoAniadido);
    }
  }

  /**
   * Borra el elemento seleccionado de la lista desplegable del carrito
   * @param prodCarrito : Producto a borrar
   */
  borrarDelCarrito(prodCarrito: ProductoCarrito): void {
    console.log('CarritoComponent.borrarDelCarrito(%o)', prodCarrito);

    const index = this.contieneProducto(prodCarrito.producto);
    if ( index !== -1 ) {
      // Borrar de la lista del carrito
      this.listaCompra.splice(index, 1);
      // TODO: Emitir al SupermercadoComponente para actualizar el valor del carrito
      this.productoBorrado.emit({
        'productoBorrado': prodCarrito
      });
    }

  }

  /**
   * Devuelve la posición del nuevo producto en el carrito, o '-1' si no lo encuentra
   * @param prodCarrito : Producto nuevo a añadir
   */
  contieneProducto(prodCarrito: Producto): number {
    let indice = -1;

    this.listaCompra.forEach((element, index) => {
      if (element.producto === prodCarrito) {
        indice = index;
      }
    });

    return indice;
  }

}
