import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ListadoProductosComponent } from './Components/listado-productos/listado-productos.component';
import { AgregarProductoComponent } from './Components/agregar-producto/agregar-producto.component';
import { ListadoGuiaDespachoComponent } from './Components/listado-guia-despacho/listado-guia-despacho.component';
import { AgregarGuiaDespachoComponent } from './Components/agregar-guia-despacho/agregar-guia-despacho.component';

import {ProductoService} from "./Services/producto.service";
import { DetalleComponent } from './Components/detalle/detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoProductosComponent,
    AgregarProductoComponent,
    ListadoGuiaDespachoComponent,
    AgregarGuiaDespachoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
