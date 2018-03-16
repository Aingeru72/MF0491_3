import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ProductosService } from './providers/productos.service';
// Components
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductoComponent } from './supermercado/producto/producto.component';



@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
