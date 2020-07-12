// ----------------------------------------------------------------- Restaurante
function AgregarRestaurante() {
    var nombre = document.getElementById("nombre").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var ImageURL = "localhost";
    var xhttp = new XMLHttpRequest();
    
    if(validarRestaurante()){
        xhttp.open("POST", "../agregarrestaurante", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&ubicacion=" + ubicacion+"&ImageURL="+ImageURL);
        
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
                } else if(resp === "error"){
                    alertaErrorAdministrador("Hay números en el nombre");
                } else if(resp === "tamNombre"){
                    alertaErrorAdministrador("El nombre puede tener un maximo de 60 digitos");
                } else if (resp === "tamUbicacion"){
                    alertaErrorAdministrador("La ubicacion puede tener un maximo de 120 digitos");
                } else if (resp === "correcto") {
                    alertaCorrectoAdministrador("Restaurante Ingresado exitosamente","./agregar_restaurante.jsp");
                }
            }
        };
    }
}

function modificarRestaurante(){
    var idRestaurante = document.getElementById("idRestaurante").value;
    var nombre = document.getElementById("nombre").value;
    var ubicacion = document.getElementById("ubicacion").value;
    //proximamente direccion de foto del restaurante AQUI
    var xhttp = new XMLHttpRequest();

    if(validarRestaurante()){
        xhttp.open("POST", "./modificarrestaurante?idRestaurante=" + idRestaurante + "&nombre=" + nombre + "&ubicacion=" + ubicacion, true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send();
        
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) { 
                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
                } else if (resp === "error") {
                    alertaErrorAdministrador("Hay números en el nombre");   
                }else if(resp === "tamNombre"){
                    alertaErrorAdministrador("El nombre puede contener hasta 60 letras");
                }else if(resp === "tamUbicacion"){
                    alertaErrorAdministrador("La ubicacion puede contener hasta 120 letras");
                }else if (resp === "correcto") {
                    alertaCorrectoAdministrador("Restaurante Modificado exitosamente","./listadorestaurante");   
                }else if(resp === "incorrecto"){
                    alertaErrorAdministrador("No se puedo agregar");
                }
            }
        };
    }
}

function BusquedaRestaurante() {
    var contenedor = document.getElementById("contenedor");
    var busqueda = document.getElementById("txtbuscar").value;
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "./buscarrestaurante", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("busqueda=" + busqueda);
    
    xhttp.onreadystatechange = function () {       
        if (this.readyState === 4 && this.status === 200) {
            contenedor.innerHTML = this.responseText;
        }
    };
}

function eliminarRestaurante(IdRestaurante){
    var xhttp = new XMLHttpRequest(); //objeto de comunicacion
    xhttp.open("POST","./eliminarrestaurante?IdRestaurante=" +IdRestaurante, true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){ //consulta de ida
            var resp = this.responseText;   
            if(resp === "correcto"){
                alertaCorrectoAdministrador("¡Eliminado con exito!","./listadorestaurante");
            }else if(resp === "incorrecto"){
                alertaErrorAdministrador("Oh.. No se pudo eliminar");
            }               
        }
    };
}

function validarRestaurante(){
    var nombre, ubicacion;
    nombre = document.getElementById("nombre").value;
    ubicacion = document.getElementById("ubicacion").value;
    
    if(nombre === "" || ubicacion === ""){
        alertaAdvertenciaAdministrador("Todos los campos son obligatorios");
        return false;
    }else if(nombre.length > 60){
        alertaErrorAdministrador("El nombre puede contener hasta 40 caracteres");
        return false;
    }else if(ubicacion.length > 120){
        alertaErrorAdministrador("La ubicacion 100 puede contener hasta 100 caracteres");
        return false;
    }else if(isNaN(nombre) === false){
        alertaErrorAdministrador("En el campo nombre no pueden ir números");
        return false;
    }else if(ubicacion.length < 20){
        alertaErrorAdministrador("El formato de Ubicacion es el siguiente:\nDistrito, Cantón, Provincia");
        return false;
    }else{
        return true;
    } 
}


// ------------------------------------------------------------------- Generales
function validarNumeros(evento) {
    tecla = (document.all) ? evento.keyCode : evento.which;

    if ((tecla > 47 && tecla < 58) || tecla === 8 || tecla === 13 || tecla === 6) {
        return true;
    } else {
        return false;
    }
}

function validarPalabras(evento) {
    digitos = (document.all) ? evento.keyCode : evento.which;
    tecla = String.fromCharCode(digitos).toLowerCase(),
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    if (letras.indexOf(tecla) === -1) {
        return false;
    }
}




