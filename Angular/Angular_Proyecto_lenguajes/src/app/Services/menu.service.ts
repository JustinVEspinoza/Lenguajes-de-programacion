import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Menu} from '../Models/menu/menu';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  API_URI="http://localhost:4000/api";
  constructor(private http:HttpClient) { }
  getMenus(){
    return this.http.get(`${this.API_URI}/Menu/`);
  }
  
   getMenuById(id){
    return this.http.get(`${this.API_URI}/Menu/${id}`);
  }
  getMenuByClave(clave){
    return this.http.get(`${this.API_URI}/Menu/Filtro/${clave}`);
  }
  deleteMenu(id:string){
    return this.http.delete(`${this.API_URI}/Menu/${id}`);
  }
  guardarMenu(menu:Menu){
    return this.http.post(`${this.API_URI}/Menu/`,menu);
  }
  updateMenu(id,updatedMenu):Observable<Menu>{
    return this.http.put(`${this.API_URI}/Menu/${id}`,updatedMenu);
  }
  
}
