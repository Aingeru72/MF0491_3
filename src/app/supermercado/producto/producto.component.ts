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

  constructor() {
    console.log('ProductoComponent.constructor()');
  }

  ngOnInit() {
    console.log('ProductoComponent.ngOnInit()');
  }

}
