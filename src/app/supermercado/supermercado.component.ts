import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  // Aritubutos
  listaProductos: Producto[];
  carrito: Producto[];
  // unidades: number;
  cantCarrito: number;
  subtotal: number;
  descuento: number;
  total: number;

  constructor(public productosService: ProductosService) {
    // console.log('SupermercadoComponent.constructor()');
    this.listaProductos = [];
    this.carrito = [];
    // this.unidades = 0;
    this.cantCarrito = 0;
    this.subtotal = 0;
    this.descuento = 0;
    this.total = 0;
  }

  ngOnInit() {
    // console.log('SupermercadoComponent.ngOnInit()');

    // Obtener el stock de productos mediante el servicio 'productosService'
    this.listaProductos = this.productosService.getAll();
    // tslint:disable-next-line:no-console
    console.debug('Lista de productos: %o', this.listaProductos);
  }

  /**
   * Añade el producto recibido de ProductoComponent tantas veces se especificó en sus unidades
   * @param event : objeto recibido con el producto a añadir al carrito
   */
  addToCart(event) {
    console.log('SupermercadoComponent.addToCart(%o)', event);

    const descuento = (event.producto.precio * (event.producto.oferta / 100)) * event.producto.unidades;

    /* for (let i = 0; i < event.producto.unidades; i++ ) {
      this.cantCarrito++;
      if (event.producto.oferta) {
        this.total += + (event.producto.precio - (event.producto.precio * (event.producto.oferta / 100)));
      } else {
        this.total += + event.producto.precio;
      }
    } */
    this.subtotal += + event.producto.precio * event.producto.unidades;
    if (event.producto.oferta) {
      this.descuento += + descuento;
    }
    this.total = this.subtotal - this.descuento;
    // tslint:disable-next-line:no-console
    console.debug(`
      subtotal: ${event.producto.precio * event.producto.unidades} \n
      descuento: ${(event.producto.precio * (event.producto.oferta / 100)) * event.producto.unidades} \n
      total: ${this.total}
    `);
    this.cantCarrito += 1 * event.producto.unidades;
    this.carrito.push(event.producto);
  }

  /**
   * Método para borrar un producto del carrito
   * @param event : evento que transmite CarritoComponente con el 'producto' eliminado
   */
  deleteFromCart(event): void {
    // tslint:disable-next-line:no-console
    console.debug('SupermercadoComponent.deleteFromCart(%o)', event.producto);

    const descuento = (event.producto.precio * (event.producto.oferta / 100)) * event.producto.unidades;

    this.subtotal -= event.producto.precio * event.producto.unidades;
    if (event.producto.oferta) {
      this.descuento -= descuento;
    }
    this.total = this.subtotal - this.descuento;
    // tslint:disable-next-line:no-console
    console.debug(`
      subtotal: ${event.producto.precio * event.producto.unidades} \n
      descuento: ${(event.producto.precio * (event.producto.oferta / 100)) * event.producto.unidades} \n
      total: ${this.total}
    `);
    this.cantCarrito -= 1 * event.producto.unidades;
  }

}
