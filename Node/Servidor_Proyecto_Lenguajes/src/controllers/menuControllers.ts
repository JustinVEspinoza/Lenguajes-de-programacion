import {Request, Response} from 'express';
 var soap = require('soap');
var url = 'http://localhost:8080/Restaurante/MenuService?wsdl';
var args = {name: 'value'};
class menuController{
    //    http://localhost:8084/WebAppRestaurante/MenuService?wsdl
    public async list(req:Request,res:Response){
       soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                client.getmenus(args, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                   console.log(response);
                       res.json(response);
                  }
                });
              }
            }); 
    }
    public async getParameters(req:Request,res:Response){
        var {id}=req.params;
        console.log({id});
            soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                  //cambiar metodo
                client.ParametrosModificarMenu({parameter:[id]}, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                       res.json(response);
                  }
                });
              }
            });    
    }
    public async image(req:Request,res:Response){
      console.log("Hey");
      console.log(req.body);
    }
    public async create(req:Request,res:Response){
      console.log(req.body);
        var menu=req.body;
           soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                client.insertarMenu({menu: [menu]}, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                    console.log(response);
                   if(JSON.stringify(response)=="true"){
                       res.json({message:'true'});
                   }else{
                       res.json({message:'false'});
                   }
                  }
                });
              }
            }); 
       
    }
    public async getUnoByClave(req:Request,res:Response){
            const {clave}=req.params;
            console.log(req.params.clave);
            var menu=[];
            console.log("Filtro:"+clave);
           soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                client.getMenuByClave({clave: [clave]}, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                    
                   res.json(response);
                  }
                });
              }
            });
           
       
    }
    public async delete(req:Request,res:Response){
          
            const {id}=req.params;
            console.log("Codigo platillo:"+[id]);
            soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                client.deleteMenu({codigoPlatillo: [id]}, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                    console.log(JSON.stringify(response));
                   if(JSON.stringify(response)=='{"return":true}'){
                     console.log(" Hola, la respuesta es true");
                       res.json({message:'true'});
                   }else{
                     console.log(" Hola, la respuesta es false");
                       res.json({message:'false'});
                   }
                  }
                });
              }
            }); 
      
    }
    public async update(req:Request,res:Response){
            console.log("Parametros:"+[req.params.id]);
            const menu=req.body;
            
            console.log(menu);
          soap.createClient(url, function(err:Error, client:any) {
              if (err) console.error(err);
              else {
                client.modifyMenu({menu: [menu]}, function(err:Error, response:Response,request:Request) {
                  if (err) console.error(err);
                  else {
                    console.log(response);
                   if(JSON.stringify(response)=='{"return":true}'){
                       res.json({message:'true'});
                   }else{
                       res.json({message:'false'});
                   }
                  }
                });
              }
            }); 
           

    }
}

export const menuControllers=new menuController();
