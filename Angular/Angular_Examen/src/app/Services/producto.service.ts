import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../Models/Producto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URI="http://localhost:4000/Examen";
  constructor(private http:HttpClient) { }
  getProductos(){
    return this.http.get(`${this.API_URI}/Producto/`);
  }
  
   getProductoById(id){
    return this.http.get(`${this.API_URI}/Producto/${id}`);
  }
 getNewId(){
    return this.http.get(`${this.API_URI}/Producto/getNewId/`);
  }
  deleteProducto(id:string){
    return this.http.delete(`${this.API_URI}/Producto/${id}`);
  }
  guardarProducto(producto:Producto){
    return this.http.post(`${this.API_URI}/Producto/`,producto);
  }
  subirImagen(datos){
    return this.http.post(`${this.API_URI}/Producto/Imagen`, datos);
  }

}
