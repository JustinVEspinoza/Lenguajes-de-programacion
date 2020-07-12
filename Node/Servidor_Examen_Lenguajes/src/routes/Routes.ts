import {Router} from 'express';
import { productosControllers} from '../controllers/productosControllers';
import { guiaControllers} from '../controllers/guiaControllers';
import {Request, Response} from 'express';
const multipart = require('connect-multiparty'); 
var fs = require('fs'); 

const multipartMiddleware = multipart({  
    uploadDir: './build/routes/uploads'

});
class Routes{
    public router:Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        /*Producto*/
        this.router.get('/Producto/',productosControllers.list);
         this.router.get('/Producto/getNewId/',productosControllers.getNewId);
        this.router.get('/Producto/:id',productosControllers.getUno);
        this.router.post('/Producto/',productosControllers.create);
        this.router.post('/Producto/Java/',productosControllers.createJava);
        this.router.post('/Producto/Imagen', multipartMiddleware, (req:Request, res, next) => { 
                                        console.log(req.body);
                                            
                                        var nameV=req.files["uploads"][0].path.split("\\");
                                        console.log(req.files["uploads"][0].path);
                                        console.log(nameV[0]+"/"+nameV[1]+"/"+req.files["uploads"][0].originalFilename);
                                        fs.rename(req.files["uploads"][0].path, nameV[0]+"/"+nameV[1]+"/"+nameV[2]+"/"+req.files["uploads"][0].originalFilename, function(err:any) {
                                            if ( err ) {console.log('ERROR: ' + err)}else{console.log("Success");};
                                        });
                                        res.json({
                                            'message': 'File uploaded succesfully.'
                                        });});
        
        this.router.delete('/Producto/:id',productosControllers.delete);
        this.router.get('/Imagenes/:img', function(req, res){
            console.log(req.params);
            res.sendFile( "/uploads/"+req.params["img"], { root: __dirname } );
        }); 
        /*Guia*/
        this.router.get('/Guia/',guiaControllers.list);
        this.router.get('/Guia/:id',guiaControllers.getUno);
          this.router.get('/Guia/Despacho/:id',guiaControllers.getUnoByDespacho);
          this.router.get('/Guia/DespachoGuia/:id',guiaControllers.getUnoByDespachoGuia);
        this.router.post('/Guia/',guiaControllers.create);
        this.router.post('/Guia/Java/',guiaControllers.createJava);
        this.router.post('/Guia/Despacho',guiaControllers.createDespacho);
          this.router.post('/Guia/Despacho/Java',guiaControllers.createDespachoJava);
        this.router.delete('/Guia/:id',guiaControllers.delete);
       

    }
}

const routes=new Routes();
export default routes.router;