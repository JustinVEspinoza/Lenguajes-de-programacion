import { Component, OnInit } from '@angular/core';
import {GuiaService} from "../../Services/guia.service";
@Component({
  selector: 'app-listado-guia-despacho',
  templateUrl: './listado-guia-despacho.component.html',
  styleUrls: ['./listado-guia-despacho.component.css']
})
export class ListadoGuiaDespachoComponent implements OnInit {
	guias:any=[];
  constructor(private GuiaService:GuiaService) { 
	 this.getGuias();
  }

   ngOnInit() {//
   this.getGuias();
  }

  getGuias(){
  	this.GuiaService.getGuias().subscribe(
      res=>{
        this.guias=res;
        
        console.log(res);
        this.getArreglarFechas();
      },
      err=>console.log(err)
    );
  }

  getArreglarFechas(){
  	for(var i=0;i<this.guias.length;i++){
  		var fecha=this.guias[i].fecha;
  		console.log(fecha);
  		var fechaTemp=fecha.split(":");
  		console.log(fechaTemp[0]);
  		var fechaTemporalDos=fechaTemp[0].split("T");
  		console.log(fechaTemporalDos[0]);
  		this.guias[i].fecha=fechaTemporalDos[0];
  	}
  }

}
