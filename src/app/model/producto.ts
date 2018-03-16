/* Modelo de clase de PRODUCTO */
export class Producto {

    // atributos
    nombre: string;
    // descripcion: string;
    imagen: string;
    precio: number;
    precioUnidad: string;
    oferta: number;
    id: number;

    constructor(
        nombre: string,
        // descripcion: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus quia soluta',
        imagen: string = 'assets/img/default_product.png',
        precio: number = 0,
        precioUnidad: string = '',
        oferta: number = 0,
        id: number = -1,
    ) {
        console.log('Producto.constructor()');

        this.nombre = nombre;
        // this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.precioUnidad = precioUnidad;
        this.oferta = oferta;
        this.id = id;
    }

}
