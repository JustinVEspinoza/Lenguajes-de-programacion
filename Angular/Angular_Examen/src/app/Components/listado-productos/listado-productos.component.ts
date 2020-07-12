import { Component, OnInit,HostBinding } from '@angular/core';
import {ProductoService} from "../../Services/producto.service";
import {GuiaService} from "../../Services/guia.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  @HostBinding('class') classes='row';
  productos:any=[];

  constructor(private GuiaService:GuiaService,private ProductoService:ProductoService) { 
    
    this.getProductos();
  }

   ngOnInit() {//
   this.getProductos();
  }
  getProductos(){
    this.ProductoService.getProductos().subscribe(
      res=>{
        this.productos=res;
        
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  delete_platillo(id:string){
    console.log(id+" codigo plaitllo");
    this.GuiaService.getDespachoById(id).subscribe(
      res=>{
        console.log(JSON.stringify(res));
        if(JSON.stringify(res)!="{\"numero_guia\":\"\"}"){
          // esta relacionadp
          Swal.fire('Producto No puede ser eliminado ')
        }else{
          this.ProductoService.deleteProducto(id).subscribe(
            res2=>{
            
              
              
              Swal.fire('Producto eliminado con exito')
              this.getProductos();
            },
            err=>console.log(err)
          );
        }
      },
      err=>console.log(err)
    );
  }
}
