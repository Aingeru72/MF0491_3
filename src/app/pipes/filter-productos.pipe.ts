/* Filtro para el buscador de productos */
import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';

@Pipe({name: 'filterProductos'})
export class FilterProductos implements PipeTransform {

  transform(productos: Producto[], searchText: string): Producto[] {
    console.log(`FilterProductos.transform(searchText: ${searchText})`);

    // Si no hay productos, no devolver nada
    if (!productos) { return []; }
    // Si no hay texto para filtrar la búsqueda, devuelve todos los productos
    if (!searchText) { return productos; }
    searchText = searchText.toLowerCase();
    let resultado = '';
    // En caso de escribir termino de búsqueda 'searchText'
    // buscar entre los productos ese fragmento de texto
    // en el atributo del nombre
    return productos.filter( producIter => {
      resultado = producIter.nombre;
      resultado = resultado.toLowerCase();
      return resultado.includes(searchText);
    });
  }

}
