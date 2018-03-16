import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  // Atributos
  @Input('producto') producto: Producto;
  precioConDescuento: number;

  constructor() {
    // console.log('ProductoComponent.constructor()');

    // Inidializar producto por defecto
    this.producto = new Producto('Producto');
  }

  ngOnInit() {
    // console.log('ProductoComponent.ngOnInit()');
    // Aplicar descuento a los productos con oferta
    this.mostrarDescuento();
  }

  mostrarDescuento() {
    // console.log('ProductoComponent.mostrarDescuento()');
    this.precioConDescuento = this.producto.precio - (this.producto.precio * (this.producto.oferta / 100));
  }

}
