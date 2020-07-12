import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Guia} from '../Models/Guia';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  API_URI="http://localhost:4000/Examen";
  constructor(private http:HttpClient) { }
  getGuias(){
    return this.http.get(`${this.API_URI}/Guia/`);
  }
  
   getGuiaById(id){
    return this.http.get(`${this.API_URI}/Guia/${id}`);
  }
 getDespachoById(id){
    return this.http.get(`${this.API_URI}/Guia/Despacho/${id}`);
  }
  getDespachoByIdGuia(id){
    return this.http.get(`${this.API_URI}/Guia/DespachoGuia/${id}`);
  }
  deleteGuia(id:string){
    return this.http.delete(`${this.API_URI}/Guia/${id}`);
  }
  guardarGuia(guia:Guia){
    return this.http.post(`${this.API_URI}/Guia/`,guia);
  }
  guardarDespacho(despacho:any){
    return this.http.post(`${this.API_URI}/Guia/Despacho`,despacho);
  }
  updateGuia(id,guia):Observable<Guia>{
    return this.http.put(`${this.API_URI}/Guia/${id}`,guia);
  }
}
