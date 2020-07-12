"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosControllers = void 0;
const dataBase_1 = __importDefault(require("../dataBase"));
class ProductosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield dataBase_1.default.query('SELECT * FROM Justin_V_producto');
            console.log(productos);
            res.json(productos);
        });
    }
    getNewId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield dataBase_1.default.query('select max(codigo)+1 as codigo from Justin_V_producto');
            console.log(productos);
            res.json(productos);
        });
    }
    getUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield dataBase_1.default.query('SELECT * FROM Justin_V_producto WHERE codigo=?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(400).json({ text: "El producto no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBase_1.default.query("INSERT INTO Justin_V_producto set ?", [req.body]);
            res.json({ message: 'Producto Guradado' });
        });
    }
    createJava(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            var objstring = JSON.stringify([req.body.Producto]);
            objstring = objstring.substring(2, objstring.length - 1);
            console.log(objstring);
            const v = objstring.split(",");
            /*Obtener variables y limpiarlas  */
            var codigo = v[0];
            codigo = codigo.substring(2, codigo.length);
            codigo = codigo.replace(/\\/g, "");
            var codigoTem = codigo.split(":")[1];
            var descripcion = v[1].replace(/\\/g, "");
            var descripcionTem = descripcion.split(":")[1];
            descripcionTem = descripcionTem.replace(/"/g, '');
            var precio = v[2].replace(/\\/g, "");
            var precioTem = precio.split(":")[1];
            var grabado = v[3].replace(/\\/g, "");
            var grabadoTem = grabado.split(":")[1];
            var imagen = v[4].replace(/\\/g, "");
            var imagenTem = imagen.split(":")[1];
            imagenTem = imagenTem.replace(/"/g, '');
            var cantidad = v[5].replace(/\\/g, "");
            cantidad = cantidad.replace("}", "");
            var cantidadTem = cantidad.split(":")[1];
            cantidadTem = cantidadTem.replace(/"/g, '');
            codigo = codigoTem;
            descripcion = descripcionTem;
            precio = precioTem;
            imagen = imagenTem;
            cantidad = cantidadTem;
            if (grabadoTem == "true") {
                grabado = 1;
            }
            else {
                grabado = 0;
            }
            //Crear objeto a insertar
            const objProducto = {
                codigo,
                descripcion,
                precio,
                grabado,
                imagen,
                cantidad
            };
            console.log(objProducto);
            yield dataBase_1.default.query("INSERT INTO Justin_V_producto set ?", objProducto);
            res.json({ message: 'Producto Guradado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield dataBase_1.default.query('DELETE  FROM Justin_V_producto WHERE codigo=?', [id]);
            res.json({ message: 'Producto Eliminado' });
        });
    }
}
exports.productosControllers = new ProductosController();
