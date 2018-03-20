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
  @Input('carrito') carrito: Producto[];
  @Output() productoBorrado = new EventEmitter();
  listaCarrito: Producto[];
  prodCarrito: Producto;

  constructor() {
    console.log('CarritoComponent.constructor()');
    this.prodCarrito = new Producto('Producto');
    this.carrito = [];
  }

  ngOnInit() {
    this.rellenarCarrito();
  }

  rellenarCarrito() {

    let nuevoProducto;

    this.carrito.forEach(element => {
      // Obtener la posición del producto en caso de contener ya ese tipo de producto
      const index = this.contieneProducto(element);

      if ( index !== -1  ) {
        nuevoProducto = new Producto(
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
    });
  }

  /**
   * Devuelve la posición del nuevo producto en el carrito, o '-1' si no lo encuentra
   * @param prodCarrito : Producto nuevo a añadir
   */
  contieneProducto(prodCarrito: Producto): number {
    let indice = -1;

    this.carrito.forEach((element, index) => {
      if (element === prodCarrito) {
        indice = index;
      }
    });

    return indice;
  }

  /**
   * Aumentar unidades del producto
   */
  aumUnidad() {
    // this.prodCarrito.unidades++;
    console.log('ProductoComponent.aumUnidad(%s)', this.prodCarrito.unidades);
  }

  /**
   * Decrecer unidades del producto
   */
  decUnidad() {
    /* if (this.prodCarrito.unidades > 1) {
      this.prodCarrito.unidades--;
    } */
    console.log('ProductoComponent.decUnidad(%s)', this.prodCarrito.unidades);
  }

  /**
   * Borra el elemento seleccionado de la lista desplegable del carrito
   * @param prodCarrito : Producto a borrar
   */
  borrarDelCarrito(prodCarrito: Producto): void {
    // tslint:disable-next-line:no-console
    /* console.debug('CarritoComponent.borrarDelCarrito(%o)', prodCarrito);
    const index = this.contieneProducto(prodCarrito);
    this.carrito.splice(index, 1);
    this.productoBorrado.emit({
      'producto': this.prodCarrito
    }); */

  }

}
