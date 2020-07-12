import {Request, Response} from 'express';
import pool from '../dataBase';
class guiaController{
	public async list(req:Request,res:Response){
      
            const productos=await pool.query('SELECT * FROM Justin_V_guiaDespacho');
        console.log(productos);
        res.json(productos);
    }

    public async getUno(req:Request,res:Response){
        
            const {id}=req.params;
            const productos=await pool.query('SELECT * FROM Justin_V_guiaDespacho WHERE numero_guia=?',[id]);
            if(productos.length>0){
                return res.json(productos[0]);
            }
            res.json({numero_guia:""});
        
    }
       public async getUnoByDespachoGuia(req:Request,res:Response){
        
            const {id}=req.params;
            console.log(id);
            const productos=await pool.query('select p.codigo,p.descripcion,p.precio,p.grabado,p.imagen,jvod.cantidad from  Justin_V_producto p inner join Justin_V_ordenDespacho jvod on p.codigo=jvod.codigo inner join Justin_V_guiaDespacho jvgD on jvod.numero_guia=jvgD.numero_guia and jvod.numero_guia=?',[id]);
            if(productos.length>0){
                return res.json(productos);
            }
            res.json({numero_guia:""});
        
    }
    public async getUnoByDespacho(req:Request,res:Response){
        
            const {id}=req.params;
            console.log(id);
            const productos=await pool.query('SELECT * FROM Justin_V_ordenDespacho WHERE codigo=?',[id]);
            if(productos.length>0){
                return res.json(productos[0]);
            }
            res.json({numero_guia:""});
        
    }
    public async create(req:Request,res:Response){
        
            await pool.query("INSERT INTO Justin_V_guiaDespacho set ?",[req.body]);
            res.json({message:'Producto Guradado'});
       
    }
    public async createJava(req:Request,res:Response){
        
          var objstring=JSON.stringify([req.body.Guia]);
        objstring=objstring.substring(2,objstring.length-2);
        objstring=objstring.replace(/\\/g,"");

        const obj=JSON.parse(objstring);
        let fechaTemp=obj["fecha"];
        let fechaDividida=fechaTemp.split(" ");
        let dia=fechaDividida[1].replace(",","");
        let fecha="";
        switch(fechaDividida[0]){
            case "Jan":
                fecha=""+fechaDividida[2]+"-01-"+dia;
            break;
            case "Feb":
                fecha=""+fechaDividida[2]+"-02-"+dia;
            break;
            case "Mar":
                fecha=""+fechaDividida[2]+"-03-"+dia;
            break;
            case "Apr":
                fecha=""+fechaDividida[2]+"-04-"+dia;
            break;
            case "May":
                fecha=""+fechaDividida[2]+"-05-"+dia;
            break;
            case "Jun":
                fecha=""+fechaDividida[2]+"-06-"+dia;
            break;
            case "Jul":
                fecha=""+fechaDividida[2]+"-07-"+dia;
            break;
            case "Aug":
                fecha=""+fechaDividida[2]+"-08-"+dia;
            break;
            case "Sep":
                fecha=""+fechaDividida[2]+"-09-"+dia;
            break;
            case "Oct":
                fecha=""+fechaDividida[2]+"-10-"+dia;
            break;
            case "Nov":
                fecha=""+fechaDividida[2]+"-11-"+dia;
            break;
            case "Dec":
                fecha=""+fechaDividida[2]+"-12-"+dia;
            break;
        }
        obj["fecha"]=fecha;
         await pool.query("INSERT INTO Justin_V_guiaDespacho set ?",obj);
            res.json({obj});
       
    }
     public async createDespacho(req:Request,res:Response){
            console.log(req.body);
            await pool.query("INSERT INTO Justin_V_ordenDespacho set ?",[req.body]);
            res.json({message:'Producto Guradado'});

       
    }
    public async createDespachoJava(req:Request,res:Response){
          var objstring=JSON.stringify([req.body.Despacho]);
        objstring=objstring.substring(2,objstring.length-2);
        objstring=objstring.replace(/\\/g,"");
        objstring=objstring.replace(/{/g,"");
        objstring=objstring.replace(/}/g,"");
        const vec=objstring.split(",");
      //  const obj=JSON.parse(objstring); 
        
          
           const numero_guia=vec[0].substring(13,vec[0].length);
           const codigo=vec[1].substring(7,vec[1].length);
           const cantidad=vec[2].substring(9,vec[2].length-1);
             const despacho={
                numero_guia,
                codigo,
                cantidad
             };
               await pool.query("INSERT INTO Justin_V_ordenDespacho set ?",despacho);
            res.json(despacho);

       
    }
    public async delete(req:Request,res:Response){
        
            const {id}=req.params;
            const productos=await pool.query('DELETE  FROM Justin_V_guiaDespacho WHERE codigo=?',[id]);
            res.json({message:'Producto Eliminado'});
      
    }

}

export const guiaControllers=new guiaController();