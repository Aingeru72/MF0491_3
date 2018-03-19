import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoCarrito } from '../../model/producto-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // Atributos
  @Input('prodCarrito') prodCarrito: Producto;
  carrito: Producto[];

  constructor() {
    console.log('CarritoComponent.constructor()');
    this.prodCarrito = new Producto('Producto');
    this.carrito = new Array;
  }

  ngOnInit() {
    this.rellenarCarrito();
  }

  rellenarCarrito() {
    // Obtener la posición del producto en caso de contener ya ese tipo de producto
    const index = this.contieneProducto(this.prodCarrito);
    let nuevoProducto;

    if ( index !== -1  ) {
      // Añadir una unidad a ese producto
      this.carrito[index].unidades++;
    } else {
      // Añadir ese producto al carritp
      nuevoProducto = new Producto(
        this.prodCarrito.nombre,
        this.prodCarrito.imagen,
        this.prodCarrito.precio,
        this.prodCarrito.precioUnidad,
        this.prodCarrito.oferta,
        this.prodCarrito.unidades,
        this.prodCarrito.id
      );
      this.carrito.push(nuevoProducto);
    }
    // tslint:disable-next-line:no-console
    console.debug('Carrito: %o', this.carrito);
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

}
