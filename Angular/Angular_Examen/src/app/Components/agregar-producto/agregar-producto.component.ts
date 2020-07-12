import { Component, OnInit,HostBinding } from '@angular/core';
import {ProductoService} from "../../Services/producto.service";
import {Producto} from "../../Models/Producto";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
	producto:Producto={
		codigo:0,//number,string,boolean,void,any
		  descripcion:"",
		  precio:0.0,
		  grabado:true,
		  imagen:"",
		  cantidad:0
	}
	uploadedFiles: Array < File > ;
	 checkbox: Array<Object> = [
    { id:"op1", nombre: "True", checked: true },
    { id:"op2",nombre: "False", checked: false }
  ];
   constructor(private ProductoService:ProductoService) { 
   		this.ProductoService.getNewId().subscribe((res)=> {
      if(res!=null && res[0]!=null && res[0]["codigo"]!=null){
	      this.producto.codigo=res[0]["codigo"];
	  }
    });
   }

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);
    this.upload();
  }
  
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.ProductoService.subirImagen(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }
validarPalabras(event: KeyboardEvent){
    const pattern = /[A-Za-z]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  validarNumeros(event: KeyboardEvent){
    const pattern = /[0-9.]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  validarNumerosDos(event: KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  validarCheckbox(id){
  	console.log(id);
  	for (var i = 0; i < this.checkbox.length; i++) {
  		if(id!=this.checkbox[i]["id"]){
  			this.checkbox[i]["checked"]=false;
  		}else{
  			if(id==="op2"){
  				this.producto.grabado=false;
  			}
  		}
  	}
  }
  validar(){

  	 var variable=true;

  	if(this.producto.descripcion===""){
  		variable=false;
  	}
  	return variable;
  }
    agregar(){

    	if( this.uploadedFiles!=null){
    		if(this.producto.precio!=0 && this.producto.cantidad!=0 && this.producto.descripcion!=""){
		      
		    	this.producto.imagen=this.uploadedFiles[0].name;

		    	this.ProductoService.guardarProducto(this.producto).subscribe((res)=> {
		    	   Swal.fire('Producto ingresado con exito')
		    	});
	    	}else{
          Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Faltan datos que ingresar',
                                footer: ''
                            })
        }
    	}else{
    		Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No has agregado la imagen',
                                footer: ''
                            })
    	}
    }

}
