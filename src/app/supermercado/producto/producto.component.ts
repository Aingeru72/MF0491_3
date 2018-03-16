import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor() {
    console.log('ProductoComponent.constructor()');
  }

  ngOnInit() {
    console.log('ProductoComponent.ngOnInit()');
  }

}
