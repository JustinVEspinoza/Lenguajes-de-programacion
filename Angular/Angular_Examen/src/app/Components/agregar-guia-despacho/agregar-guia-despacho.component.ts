
import { Component, OnInit } from '@angular/core';
import {Guia} from "../../Models/Guia";
import {GuiaService} from "../../Services/guia.service";
import {ProductoService} from "../../Services/producto.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-guia-despacho',
  templateUrl: './agregar-guia-despacho.component.html',
  styleUrls: ['./agregar-guia-despacho.component.css']
})
export class AgregarGuiaDespachoComponent implements OnInit {
guia:Guia={
	numero_guia:"",
	fecha:"",
	hora:"",
	nombre_despachador:""
};
productos:any=[];
codigo:string="";
validator:boolean=true;
  constructor(private GuiaService:GuiaService,private ProductoService:ProductoService) { }

  ngOnInit() {
  }
validarNumerosDos(event: KeyboardEvent){
    const pattern = /[0-9]/;
    var validar=true;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
        validar=false;
    }
    return validar;
  }
  validarPalabras(event: KeyboardEvent){
    const pattern = /[A-Za-z]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  mascaraHora(e){
  	if(this.validarNumerosDos(e)){
	  	var temp=this.guia.hora;
	  	const regex =":";
	  	temp=temp.replace(regex,"");
	  	if(temp.length==2 || temp.length==4){
	  		this.guia.hora=this.guia.hora+":";
	  	}else{
	  		if(temp.length==7){
	  			 e.preventDefault();
	  		}
	  	}
  	}
  	
  }
  arreglarHora(){
  	var horaVector=this.guia.hora.split(":");
  	if(horaVector.length>2){
  		this.validator=true;
  		var horaTemp="";
  		var horaFinal="";
  		for(var i=0;i<horaVector.length;i++){
  			horaTemp=horaVector[i];
  			if(horaTemp.length<2){
  				horaFinal+=":0"+horaTemp;
  			}else{
  				if(horaTemp.length>2){
  					this.validator=false;
  					//Mal formato
  				}else{
  					if(i!=0){
  						horaFinal+=":"+horaTemp;
  					}else{
  						horaFinal+=""+horaTemp;
  					}
  					
  				}
  			}
  		}
  		console.log(horaFinal);
  		this.guia.hora=horaFinal;
  	}else{
  		//Mal formato
  		this.validator=false;
  	}
  }
  agregar(){
  	this.arreglarHora();
  	this.validarNumeroGuia();
  	if(this.productos.length>0){
	  	this.GuiaService.getGuiaById(this.guia.numero_guia).subscribe((res)=> {
			    // console.log(res);
			     if(res["numero_guia"]===""){
            if(this.guia.hora==="" || this.guia.fecha==="" || this.guia.nombre_despachador===""){
              Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Hay datos que faltan ingresar',
                                footer: ''
                            })
            }else{
  			     	this.GuiaService.guardarGuia(this.guia).subscribe((res)=> {
  			     		//console.log(res);
  			     		for(var i=0;i<this.productos.length;i++){
  				  			console.log(this.productos[i].codigo)
  				  			const despacho={"numero_guia":this.guia.numero_guia,"codigo":this.productos[i].codigo,"cantidad":this.productos[i].cantidad};
  				  			this.GuiaService.guardarDespacho(despacho).subscribe((res)=> {
  				  				
  				  			});
  				  		}
  			     		
                 Swal.fire('Ingresado satisfactoriamente la informacion')
  	   		 		});
             }
			     }else{
			      Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Esa guia ya existe',
                                footer: ''
                            })
			     }
			    
	   		 });
	  }else{
	  	 Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No has agregado ni un producto',
                                footer: ''
                            })
	  }
  }
  add(){
  	this.ProductoService.getProductoById(this.codigo).subscribe((res)=> {
		     console.log(res);
		    // res.cantidad=1;
         const obj=res;
         obj["cantidad"]=1;
		     this.productos.push(obj);
   		 });
  }
mascaraNumeroGuia(e){
	var guiaTemp=this.guia.numero_guia;
	const pattern = /[0-9]/;
	console.log(guiaTemp);
	if(guiaTemp.length<3){
		if(pattern.test(e.key)){
			 e.preventDefault();
		}
	}else{
		if(guiaTemp.length===3){
			this.guia.numero_guia=this.guia.numero_guia+"-";
		}
		if(!pattern.test(e.key) || guiaTemp.length>6){
			 e.preventDefault();
		}
	}
}
  validarNumeroGuia(){
  	var guiaTemp=this.guia.numero_guia;
  	var validar=true;
  	const pattern = /[0-9]/;
  	if(guiaTemp.length===7){
  		var tempLetras=guiaTemp.substring(0,3);
  		var tempNumeros=guiaTemp.substring(4,7);
  		for(var i=0;i<tempLetras.length;i++){
  			if(pattern.test(tempLetras.charAt(i)) || !pattern.test(tempNumeros.charAt(i))){
  				validar=false;
  			}
  		}
  	}else{
  		validar=false;
  	}

  	return validar;
  }
  cargar(){
  	console.log("Cargar");
  	if(this.productos.length>0){
  		var validar=true;
  		for(var i=0;i<this.productos.length;i++){
  			console.log(this.productos[i].codigo+"==="+this.codigo)
  			if(this.productos[i].codigo==this.codigo){
  				this.productos[i].cantidad=this.productos[i].cantidad+1;
  				validar=false;
  			}
  		}
  		if(validar===true){
  			this.add();
  		}
  	}else{
  		this.add();
  		
  	}
  	
  }

}
