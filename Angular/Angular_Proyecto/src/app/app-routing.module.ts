import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListadoMenuComponent} from './components/listado-menu/listado-menu.component';
import {AgregarMenuComponent} from './components/agregar-menu/agregar-menu.component';
import {ModificarMenuComponent} from './components/modificar-menu/modificar-menu.component';
const routes: Routes = [
    {path:'',
  redirectTo:'/Menu',
  pathMatch:'full'},
  {path:'Menu',
  component:ListadoMenuComponent},
  {path:'Menu/agregar',
  component:AgregarMenuComponent},
  {path:'Menu/Modificar/:codigo',
  component:ModificarMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
