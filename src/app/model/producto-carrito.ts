import { Producto } from './producto';

/* Modelo de clase de PRODUCTO-CARRITO */
export class ProductoCarrito {

    // Atributos
    producto: Producto;
    unidades: number;

    constructor(
        producto: Producto,
        unidades: number = 0
    ) {
        console.log(
            'ProductoCarrito.constructor(%o', producto,
            'unidades: ', unidades
        );

        this.producto = producto;
        this.unidades = unidades;
    }
}
