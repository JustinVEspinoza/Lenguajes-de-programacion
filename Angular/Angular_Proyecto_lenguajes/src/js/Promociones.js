// ------------------------------------------------------------------ Generales
function validarPalabras(evento) {
    digitos = (document.all) ? evento.keyCode : evento.which;
    tecla = String.fromCharCode(digitos).toLowerCase(),
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    if (letras.indexOf(tecla) === -1) {
        return false;
    }
}

function validarNumeros(evento) {
    tecla = (document.all) ? evento.keyCode : evento.which;
    if ((tecla > 47 && tecla < 58) || tecla === 8 || tecla === 13 || tecla === 6) {
        return true;
    } else {
        return false;
    }
}

// ---------------------------------------------------------------- Promociones
function validarPromocion(){
    var descuento = document.getElementById("descuento").value;
    
    if(descuento === ""){
        alertaAdvertenciaAdministrador("El descuento se encuentra vacio");
        return false;
    }else if(isNaN(descuento)){
        alertaErrorAdministrador("En el descuento solo pueden ir números");
        return false;
    }else if(descuento.length > 2 || descuento < 1){
        alertaErrorAdministrador("El descuento solo puede comprender de 1% al 99%");
        return false;
    }else{
        return true;
    }
}

function buscarPromocion(){
    var contenedor = document.getElementById("contenedor");
    var busqueda = document.getElementById("txtbuscar").value;
    var xhttp = new XMLHttpRequest();   
    
    xhttp.open("POST", "./buscarpromocion", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("busqueda=" + busqueda);
    
    xhttp.onreadystatechange = function () {       
        if (this.readyState === 4 && this.status === 200) {
            contenedor.innerHTML = this.responseText;
        }
    };
}

function eliminarPromocion(codigoPromocion){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","./eliminarpromocion?codigoPromocion=" +codigoPromocion, true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){ //consulta de ida
            
            var resp = this.responseText;   
            if(resp === "correcto"){
                alertaCorrectoAdministrador("!Fue eliminado exitosamente¡","./listadopromocion");
            }else if(resp === "incorrecto"){
                alertaErrorAdministrador("¡Error al eliminar!");
            } 
        }
    }; 
}

function agregarPromocion(){
   if(validarPromocion()){
        var nombre_platillo = document.getElementById("nombre_platillo").value;
        var descuento = document.getElementById("descuento").value;
        var xhttp = new XMLHttpRequest();
   
        xhttp.open("POST", "./agregarpromocion", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("nombre_platillo="+nombre_platillo+"&descuento=" + descuento);
        
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
                } else if(resp === "error"){
                    alertaErrorAdministrador("El descuento debe ser en números");
                } else if(resp === "incorrecto"){
                    alertaErrorAdministrador("El descuento solo puede ir de 1% a 99%");
                } else if (resp === "repetido") {
                    alertaErrorAdministrador("Esta comida ya cuenta con un descuento");
                } else if(resp === "correcto"){
                    alertaCorrectoAdministrador("!Fue ingresado exitosamente¡","./listadopromocion");
                }
            }
        };
    }
}

function modificarPromocion(){
    if(validarPromocion()){
        var codigoPromocion = document.getElementById("codigoPromocion").value;
        var descuento = document.getElementById("descuento").value;
        var xhttp = new XMLHttpRequest();
        
        xhttp.open("POST", "./modificarpromocion", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("codigoPromocion="+codigoPromocion+"&descuento=" + descuento);
        
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
                } else if(resp === "error"){
                    alertaErrorAdministrador("El descuento debe ser en números");
                } else if(resp === "descuento"){
                    alertaErrorAdministrador("El descuento solo puede ir de 1% a 99%");
                } else if (resp === "correcto") {
                    alertaCorrectoAdministrador("!Fue modificado exitosamente¡","./listadopromocion");
                } else if(resp === "incorrecto"){
                    alertaErrorAdministrador("No se pudo modificar correctamente");
                }
            }
        };
    }
}