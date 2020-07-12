import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuService } from '../../Services/menu.service';

@Component({
  selector: 'app-listado-menu',
  templateUrl: './listado-menu.component.html',
  styleUrls: ['./listado-menu.component.css']
})
export class ListadoMenuComponent implements OnInit {

  @HostBinding('class') classes='row';
  menus:any=[];
  clave:string="";
  constructor(private MenuService:MenuService) { 
    this.getMenus();
  }

  ngOnInit() {//
    this.getMenus();
  }
  getMenus(){
    this.MenuService.getMenus().subscribe(
      res=>{
        this.menus=res['return'];
        
        console.log(this.menus);
      },
      err=>console.log(err)
    );
  }
  
  delete_platillo(id:string){
    console.log(id+" codigo");
  	this.MenuService.deleteMenu(id).subscribe(
      res=>{
        console.log(res);
        this.getMenus();
      },
      err=>console.log(err)
    );


  }
  searchbyFilters(){
      console.log(this.clave);
      if(this.clave==""){
        this.getMenus();
      }else{
        this.MenuService.getMenuByClave(this.clave).subscribe(
          res=>{
            console.log(res);
            this.menus=res['return'];
            
          },
          err=>console.log(err)
        );
      }
      
    }
}
