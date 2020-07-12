import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { ActivatedRoute } from '@angular/router';
import {Menu} from '../../Models/menu/menu';
@Component({
  selector: 'app-modificar-menu',
  templateUrl: './modificar-menu.component.html',
  styleUrls: ['./modificar-menu.component.css']
})
export class ModificarMenuComponent implements OnInit {

  menubyId:Menu={
   codigoPlatillo:0,
   nombrePlatillo:'',
   descripcionPlatillo:'',
   descuento:0,
   precio:0,
   racion:0,
   calorias:'',
   imageurl:''};
   
  constructor(private MenuService:MenuService,private route: ActivatedRoute) { 
    //obtenerId
     var id = this.route.snapshot.paramMap.get('codigo');
     console.log(id);
     //this.menubyId.codigoPlatillo=parseInt(id);
     console.log(this.menubyId);
    this.MenuService.getMenuById(id).subscribe(
      res=>{
        
        this.menubyId=res['return'];
        this.menubyId.codigoPlatillo=parseInt(id);
        console.log(this.menubyId);

      },
      err=>console.log(err)
    );
  }

  ngOnInit() {
  }
  validarPalabras(event: KeyboardEvent){
    const pattern = /[A-Za-z]/;
    const inputChar = event.code;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  validarNumeros(event: KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = event.code;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  update_platillo(){
    console.log(this.menubyId);
    this.MenuService.updateMenu(this.menubyId.codigoPlatillo,this.menubyId).subscribe(
      res=>{
        console.log(res);
        
      },
      err=>console.log(err)
    );
  }

}
