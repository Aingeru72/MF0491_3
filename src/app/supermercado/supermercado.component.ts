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
  subtotal: number;
  descuento: number;
  total: number;

  constructor(public productosService: ProductosService) {
    // console.log('SupermercadoComponent.constructor()');
    this.listaProductos = [];
    this.carrito = [];
    this.subtotal = 0;
    this.descuento = 0;
    this.total = 0;
  }

  ngOnInit() {
    // console.log('SupermercadoComponent.ngOnInit()');

    // Obtener el stock de productos mediante el servicio 'productosService'
    this.listaProductos = this.productosService.getAll();
  }

  /**
   * Añade el producto recibido de ProductoComponent tantas veces se especificó en sus unidades
   * @param event : objeto recibido con el producto y su número de unidades
   */
  addToCart(event) {
    console.log('SupermercadoComponent.addToCart(%o)', event);

    for (let i = 0; i < event.unidades; i++ ) {
      this.carrito.push(event.producto);
      if (event.producto.oferta) {
        this.subtotal += + (event.producto.precio - (event.producto.precio * (event.producto.oferta / 100)));
      } else {
        this.subtotal += + event.producto.precio;
      }
    }
    this.total = this.subtotal;
  }

}
