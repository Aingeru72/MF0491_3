import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';
import { ProductoCarrito } from '../model/producto-carrito';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  // Aritubutos
  listaProductos: Producto[];
  carrito: ProductoCarrito[];
  productoAniadido: ProductoCarrito;
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
  addToCart(event): void {
    console.log('SupermercadoComponent.addToCart(%o)', event);
    this.productoAniadido = new ProductoCarrito(event.producto, event.unidades);
    // tslint:disable-next-line:no-console
    console.debug('Producto añadido al carrito %o', this.productoAniadido);

    this.aumCarrito(event.producto, event.unidades);
    this.cantCarrito += 1 * event.unidades;
    this.carrito.push(this.productoAniadido);
  }

  /**
   * Incrementar el valor del carrito en 1 unidad y el valor del producto incrementado
   * @param event : Objeto con el producto incrementado
   */
  incremCarrito(event): void {
    console.log('SupermercadoComponent.incremCarrito(%o)', event);

    this.aumCarrito(event.producto, 1);
    this.cantCarrito++;
  }

  /**
   * Aumenta el valor y unidades del carrito
   * @param event : objeto con precio y unidades para aumentar en el carrito
   */
  aumCarrito(producto: Producto, unidades: number): void {
    const descuento = (producto.precio * (producto.oferta / 100)) * unidades;

    this.subtotal += + producto.precio * unidades;
    if (producto.oferta) {
      this.descuento += + descuento;
    }
    this.total = this.subtotal - this.descuento;
    // tslint:disable-next-line:no-console
    console.debug(`
      subtotal: ${producto.precio * unidades} \n
      descuento: ${(producto.precio * (producto.oferta / 100)) * unidades} \n
      total: ${this.total}
    `);
  }

  /**
   * Decrementar el valor del carrito en 1 unidad y actualizar el valor del carrito con el producto decrementado
   * @param event : Objeto con el producto decrementado
   */
  decremCarrito(event): void {
    console.log('SupermercadoComponent.decremCarrito(%o)', event);

    this.dismCarrito(event.producto, 1);
    this.cantCarrito--;
  }

  /**
   * Disminuye el valor y unidades del carrito
   * @param event : objeto con precio y unidades para disminuir en el carrito
   */
  dismCarrito(producto: Producto, unidades: number): void {
    const descuento = (producto.precio * (producto.oferta / 100)) * unidades;

    this.subtotal -= producto.precio * unidades;
    if (producto.oferta) {
      this.descuento -= descuento;
    }
    this.total = this.subtotal - this.descuento;
    // tslint:disable-next-line:no-console
    console.debug(`
      subtotal: ${producto.precio * unidades} \n
      descuento: ${(producto.precio * (producto.oferta / 100)) * unidades} \n
      total: ${this.total}
    `);
  }

  /**
   * Método para borrar un producto del carrito
   * @param event : evento que transmite CarritoComponente con el 'producto' eliminado
   */
  deleteFromCart(event): void {
    console.log('SupermercadoComponent.deleteFromCart(%o)', event.producto);

    this.dismCarrito(event.producto, event.unidades);
    this.cantCarrito -= 1 * event.producto.unidades;
  }

}
