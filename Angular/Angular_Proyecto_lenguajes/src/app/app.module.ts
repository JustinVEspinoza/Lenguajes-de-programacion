import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';;

import { NgxUploaderModule } from 'ngx-uploader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoMenuComponent } from './components/listado-menu/listado-menu.component';
import { ModificarMenuComponent } from './components/modificar-menu/modificar-menu.component';
import { AgregarMenuComponent } from './components/agregar-menu/agregar-menu.component';
import {MenuService} from './Services/menu.service';
@NgModule({
  declarations: [
    AppComponent,
    ListadoMenuComponent,
    ModificarMenuComponent,
    AgregarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUploaderModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
