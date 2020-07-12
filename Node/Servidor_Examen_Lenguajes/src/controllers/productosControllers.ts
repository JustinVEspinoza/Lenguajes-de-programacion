
import {Request, Response} from 'express';
import pool from '../dataBase';

class ProductosController{
    public async list(req:Request,res:Response){
      
            const productos=await pool.query('SELECT * FROM Justin_V_producto');
        console.log(productos);
        res.json(productos);
    }
public async getNewId(req:Request,res:Response){
      
            const productos=await pool.query('select max(codigo)+1 as codigo from Justin_V_producto');
        console.log(productos);
        res.json(productos);
    }
    public async getUno(req:Request,res:Response){
        
            const {id}=req.params;
            const productos=await pool.query('SELECT * FROM Justin_V_producto WHERE codigo=?',[id]);
            if(productos.length>0){
                return res.json(productos[0]);
            }
            res.status(400).json({text:"El producto no existe"});
        
    }
    public async create(req:Request,res:Response){
        
            await pool.query("INSERT INTO Justin_V_producto set ?",[req.body]);
            res.json({message:'Producto Guradado'});
       
    }


    public async createJava(req:Request,res:Response){
         console.log([req.body]);
        var objstring=JSON.stringify([req.body.Producto]);
        objstring=objstring.substring(2,objstring.length-1);
        console.log(objstring);
        const v=objstring.split(",");
        /*Obtener variables y limpiarlas  */
        var codigo=v[0];
        codigo=codigo.substring(2,codigo.length);
        codigo=codigo.replace(/\\/g,"");
        var codigoTem=codigo.split(":")[1];

        var descripcion=v[1].replace(/\\/g,"");
         var descripcionTem=descripcion.split(":")[1];
         descripcionTem=descripcionTem.replace(/"/g,'');

        var precio=v[2].replace(/\\/g,"");
         var precioTem=precio.split(":")[1];

        var grabado=v[3].replace(/\\/g,"");
         var grabadoTem=grabado.split(":")[1];

        var imagen=v[4].replace(/\\/g,"");
         var imagenTem=imagen.split(":")[1];
          imagenTem=imagenTem.replace(/"/g,'');

        var cantidad=v[5].replace(/\\/g,"");
        cantidad=cantidad.replace("}","");

         var cantidadTem=cantidad.split(":")[1];
          cantidadTem=cantidadTem.replace(/"/g,'');
          codigo=codigoTem;
          descripcion=descripcionTem;
          precio=precioTem;
          imagen=imagenTem;
          cantidad=cantidadTem;
        if(grabadoTem=="true"){
            grabado=1;
        }else{
            grabado=0;
        }
       //Crear objeto a insertar
        const objProducto={
            codigo,
            descripcion,
            precio,
            grabado,
            imagen,
            cantidad
        }
        console.log(objProducto);
       
            await pool.query("INSERT INTO Justin_V_producto set ?",objProducto);
            
            res.json({message:'Producto Guradado'});
       
    }

    public async delete(req:Request,res:Response){
        
            const {id}=req.params;
            const productos=await pool.query('DELETE  FROM Justin_V_producto WHERE codigo=?',[id]);
            res.json({message:'Producto Eliminado'});
      
    }

}

export const productosControllers=new ProductosController();
