import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListadoProductosComponent} from './Components/listado-productos/listado-productos.component';
import {AgregarProductoComponent} from './Components/agregar-producto/agregar-producto.component';
import {ListadoGuiaDespachoComponent} from './Components/listado-guia-despacho/listado-guia-despacho.component';
import {AgregarGuiaDespachoComponent} from './Components/agregar-guia-despacho/agregar-guia-despacho.component';
import {DetalleComponent} from './Components/detalle/detalle.component';
const routes: Routes = [
    {path:'',
  redirectTo:'/Examen',
  pathMatch:'full'},
  {path:'Examen',
  component:ListadoProductosComponent},
  {path:'Examen/Producto/agregar',
  component:AgregarProductoComponent},
  {path:'Examen/Guia',
  component:ListadoGuiaDespachoComponent},
  {path:'Examen/Guia/agregar',
  component:AgregarGuiaDespachoComponent},
  {path:'Examen/Guia/Detalles/:codigo',
  component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
