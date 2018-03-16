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

  constructor(public productosService: ProductosService) {
    // console.log('SupermercadoComponent.constructor()');
  }

  ngOnInit() {
    // console.log('SupermercadoComponent.ngOnInit()');

    // Obtener el stock de productos mediante el servicio 'productosService'
    this.listaProductos = this.productosService.getAll();
  }

}
