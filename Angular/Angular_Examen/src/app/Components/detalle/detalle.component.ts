import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductoService} from "../../Services/producto.service";
import {GuiaService} from "../../Services/guia.service";
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
productos:any=[];
  constructor(private route: ActivatedRoute,private GuiaService:GuiaService,private ProductoService:ProductoService) {
  	
    var id = this.route.snapshot.paramMap.get('codigo');
     console.log(id);
     //this.menubyId.codigoPlatillo=parseInt(id);
   
    this.GuiaService.getDespachoByIdGuia(id).subscribe(
      res=>{
        
        console.log(res);
        this.productos=res;

      },
      err=>console.log(err)
    );
  }

  ngOnInit() {
  }

}
