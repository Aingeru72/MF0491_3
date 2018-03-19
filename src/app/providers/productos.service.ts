import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCK_PRODUCTOS } from './mock.productos';

@Injectable()
export class ProductosService {

  productos = new Array<Producto>();
  producto = Producto;

  constructor() {
    console.log('ProductosService.constructor()');
  }

  /**
   * Retorna todos los productos en stock
   */
  getAll(): Producto[] {
    console.log('ProductosService.getAll()');
    this.productos = [];
    let producto;

    const jsonData = JSON.parse(MOCK_PRODUCTOS.stock);

    jsonData.forEach( element => {

      producto = new Producto(
        element.nombre,
        element.imagen,
        element.precio,
        element.precioUnidad,
        element.oferta,
        element.unidades,
        element.id
      );

      this.productos.push(producto);

    });
    return this.productos;
  }
}
