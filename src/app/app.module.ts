import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductoComponent } from './supermercado/producto/producto.component';
// Pipes/Filters
import { FilterProductos } from './pipes/filter-productos.pipe';
// Services
import { ProductosService } from './providers/productos.service';
import { CarritoComponent } from './supermercado/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductoComponent,
    // Filters
    FilterProductos,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
