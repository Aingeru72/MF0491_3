import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  // Atributos
  @Input('producto') producto: Producto;
  @Output() productoAniadido = new EventEmitter();
  precioConDescuento: number;
  // unidades: number;

  constructor() {
    // console.log('ProductoComponent.constructor()');

    // Inidializar producto por defecto
    this.producto = new Producto('Producto');
    // this.unidades = 1;
  }

  ngOnInit() {
    // console.log('ProductoComponent.ngOnInit()');
    // Aplicar descuento a los productos con oferta
    this.mostrarDescuento();
  }

  /**
   * Calcula el precio final con descuento aplicado
   */
  mostrarDescuento() {
    // console.log('ProductoComponent.mostrarDescuento()');
    this.precioConDescuento = this.producto.precio - (this.producto.precio * (this.producto.oferta / 100));
  }

  /**
   * Aumentar unidades del producto
   */
  aumUnidad() {
    console.log('ProductoComponent.aumUnidad(%s)', this.producto.unidades);
    this.producto.unidades++;
  }

  /**
   * Decrecer unidades del producto
   */
  decUnidad() {
    console.log('ProductoComponent.decUnidad(%s)', this.producto.unidades);
    if (this.producto.unidades > 1) {
      this.producto.unidades--;
    }
  }

  /**
   * Emite un evento al SupermercadoComponent (padre) con el producto y sus unidades
   */
  addToCart() {
    // console.log('ProductoComponent.addToCart(producto : %o y unidades : %s', this.producto, this.unidades);
    console.log('ProductoComponent.addToCart(%o :', this.producto);

    this.productoAniadido.emit({
      'producto': this.producto
    });
  }

}
