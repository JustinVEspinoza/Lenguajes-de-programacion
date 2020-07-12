"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControllers_1 = require("../controllers/productosControllers");
const guiaControllers_1 = require("../controllers/guiaControllers");
const multipart = require('connect-multiparty');
var fs = require('fs');
const multipartMiddleware = multipart({
    uploadDir: './build/routes/uploads'
});
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*Producto*/
        this.router.get('/Producto/', productosControllers_1.productosControllers.list);
        this.router.get('/Producto/getNewId/', productosControllers_1.productosControllers.getNewId);
        this.router.get('/Producto/:id', productosControllers_1.productosControllers.getUno);
        this.router.post('/Producto/', productosControllers_1.productosControllers.create);
        this.router.post('/Producto/Java/', productosControllers_1.productosControllers.createJava);
        this.router.post('/Producto/Imagen', multipartMiddleware, (req, res, next) => {
            console.log(req.body);
            var nameV = req.files["uploads"][0].path.split("\\");
            console.log(req.files["uploads"][0].path);
            console.log(nameV[0] + "/" + nameV[1] + "/" + req.files["uploads"][0].originalFilename);
            fs.rename(req.files["uploads"][0].path, nameV[0] + "/" + nameV[1] + "/" + nameV[2] + "/" + req.files["uploads"][0].originalFilename, function (err) {
                if (err) {
                    console.log('ERROR: ' + err);
                }
                else {
                    console.log("Success");
                }
                ;
            });
            res.json({
                'message': 'File uploaded succesfully.'
            });
        });
        this.router.delete('/Producto/:id', productosControllers_1.productosControllers.delete);
        this.router.get('/Imagenes/:img', function (req, res) {
            console.log(req.params);
            res.sendFile("/uploads/" + req.params["img"], { root: __dirname });
        });
        /*Guia*/
        this.router.get('/Guia/', guiaControllers_1.guiaControllers.list);
        this.router.get('/Guia/:id', guiaControllers_1.guiaControllers.getUno);
        this.router.get('/Guia/Despacho/:id', guiaControllers_1.guiaControllers.getUnoByDespacho);
        this.router.get('/Guia/DespachoGuia/:id', guiaControllers_1.guiaControllers.getUnoByDespachoGuia);
        this.router.post('/Guia/', guiaControllers_1.guiaControllers.create);
        this.router.post('/Guia/Java/', guiaControllers_1.guiaControllers.createJava);
        this.router.post('/Guia/Despacho', guiaControllers_1.guiaControllers.createDespacho);
        this.router.post('/Guia/Despacho/Java', guiaControllers_1.guiaControllers.createDespachoJava);
        this.router.delete('/Guia/:id', guiaControllers_1.guiaControllers.delete);
    }
}
const routes = new Routes();
exports.default = routes.router;
