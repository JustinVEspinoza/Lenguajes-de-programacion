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
exports.guiaControllers = void 0;
const dataBase_1 = __importDefault(require("../dataBase"));
class guiaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield dataBase_1.default.query('SELECT * FROM Justin_V_guiaDespacho');
            console.log(productos);
            res.json(productos);
        });
    }
    getUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield dataBase_1.default.query('SELECT * FROM Justin_V_guiaDespacho WHERE numero_guia=?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.json({ numero_guia: "" });
        });
    }
    getUnoByDespachoGuia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const productos = yield dataBase_1.default.query('select p.codigo,p.descripcion,p.precio,p.grabado,p.imagen,jvod.cantidad from  Justin_V_producto p inner join Justin_V_ordenDespacho jvod on p.codigo=jvod.codigo inner join Justin_V_guiaDespacho jvgD on jvod.numero_guia=jvgD.numero_guia and jvod.numero_guia=?', [id]);
            if (productos.length > 0) {
                return res.json(productos);
            }
            res.json({ numero_guia: "" });
        });
    }
    getUnoByDespacho(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const productos = yield dataBase_1.default.query('SELECT * FROM Justin_V_ordenDespacho WHERE codigo=?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.json({ numero_guia: "" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBase_1.default.query("INSERT INTO Justin_V_guiaDespacho set ?", [req.body]);
            res.json({ message: 'Producto Guradado' });
        });
    }
    createJava(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var objstring = JSON.stringify([req.body.Guia]);
            objstring = objstring.substring(2, objstring.length - 2);
            objstring = objstring.replace(/\\/g, "");
            const obj = JSON.parse(objstring);
            let fechaTemp = obj["fecha"];
            let fechaDividida = fechaTemp.split(" ");
            let dia = fechaDividida[1].replace(",", "");
            let fecha = "";
            switch (fechaDividida[0]) {
                case "Jan":
                    fecha = "" + fechaDividida[2] + "-01-" + dia;
                    break;
                case "Feb":
                    fecha = "" + fechaDividida[2] + "-02-" + dia;
                    break;
                case "Mar":
                    fecha = "" + fechaDividida[2] + "-03-" + dia;
                    break;
                case "Apr":
                    fecha = "" + fechaDividida[2] + "-04-" + dia;
                    break;
                case "May":
                    fecha = "" + fechaDividida[2] + "-05-" + dia;
                    break;
                case "Jun":
                    fecha = "" + fechaDividida[2] + "-06-" + dia;
                    break;
                case "Jul":
                    fecha = "" + fechaDividida[2] + "-07-" + dia;
                    break;
                case "Aug":
                    fecha = "" + fechaDividida[2] + "-08-" + dia;
                    break;
                case "Sep":
                    fecha = "" + fechaDividida[2] + "-09-" + dia;
                    break;
                case "Oct":
                    fecha = "" + fechaDividida[2] + "-10-" + dia;
                    break;
                case "Nov":
                    fecha = "" + fechaDividida[2] + "-11-" + dia;
                    break;
                case "Dec":
                    fecha = "" + fechaDividida[2] + "-12-" + dia;
                    break;
            }
            obj["fecha"] = fecha;
            yield dataBase_1.default.query("INSERT INTO Justin_V_guiaDespacho set ?", obj);
            res.json({ obj });
        });
    }
    createDespacho(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield dataBase_1.default.query("INSERT INTO Justin_V_ordenDespacho set ?", [req.body]);
            res.json({ message: 'Producto Guradado' });
        });
    }
    createDespachoJava(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var objstring = JSON.stringify([req.body.Despacho]);
            objstring = objstring.substring(2, objstring.length - 2);
            objstring = objstring.replace(/\\/g, "");
            objstring = objstring.replace(/{/g, "");
            objstring = objstring.replace(/}/g, "");
            const vec = objstring.split(",");
            //  const obj=JSON.parse(objstring); 
            const numero_guia = vec[0].substring(13, vec[0].length);
            const codigo = vec[1].substring(7, vec[1].length);
            const cantidad = vec[2].substring(9, vec[2].length - 1);
            const despacho = {
                numero_guia,
                codigo,
                cantidad
            };
            yield dataBase_1.default.query("INSERT INTO Justin_V_ordenDespacho set ?", despacho);
            res.json(despacho);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield dataBase_1.default.query('DELETE  FROM Justin_V_guiaDespacho WHERE codigo=?', [id]);
            res.json({ message: 'Producto Eliminado' });
        });
    }
}
exports.guiaControllers = new guiaController();
