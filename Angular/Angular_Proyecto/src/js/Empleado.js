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

function BusquedaEmpleado() {
    var contenedor = document.getElementById("contenedor");
    var busqueda = document.getElementById("txtbuscar").value;
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "./buscarempleado", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("busqueda=" + busqueda);
    xhttp.onreadystatechange = function () {       
        if (this.readyState === 4 && this.status === 200) {
            contenedor.innerHTML = this.responseText;
        }
    };
}

function eliminarEmpleado(idEmpleado) {
    var xhttp = new XMLHttpRequest(); //objeto de comunicacion
    xhttp.open("POST","./eliminarempleado?idEmpleado=" +idEmpleado, true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){ //consulta de ida
            var resp = this.responseText;   
            if(resp === "correcto"){
                alertaCorrectoAdministrador("¡Eliminado Correctamente!","./listadoempleado");
            }else if(resp === "incorrecto"){
                alertaErrorAdministrador("No se pudo eliminar...");
            }
        }
    }; 
}

function insertarEmpleado() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var tipo = document.getElementById("tipo").value;
    var xhttp = new XMLHttpRequest();

    if(nombre === "" || correo === "" || telefono === ""){
        alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
        return false;
    }else{
        xhttp.open("POST", "../agregarempleado", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&correo=" + correo + "&telefono=" + telefono+"&tipo="+tipo);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
                } else if(resp === "nombreMal"){
                    alertaErrorAdministrador("Hay números en el nombre");
                } else if(resp === "numeroMal"){
                    alertaErrorAdministrador("Hay letras en el telefono");
                } else if (resp === "numeroTam"){
                    alertaErrorAdministrador("El número tiene que tener ocho digitos");
                }else if(resp === "correoRepetido"){
                    alertaErrorAdministrador("El correo ya se encuentra registrado");
                }else if(resp === "telefonoRepetido"){
                    alertaErrorAdministrador("El número telefonico ya se encuentra registrado");
                }else if(resp === "correcto"){
                    alertaCorrectoAdministrador("¡Empleado Agregado correctamente!","./agregar_empleado.jsp");
                }else if(resp === "incorrecto"){
                    alertaErrorAdministrador("Oh.. no se pudo ingresar el empleado");
                }
            }
        };
    }
}

function ModificarEmpleado() {
    var idEmpleado = document.getElementById("idEmpleado").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var tipo = document.getElementById("tipo").value;
    var xhttp = new XMLHttpRequest();

    if(nombre === "" || correo === "" || telefono === ""){
         alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
    }else{
        xhttp.open("POST", "./modificarempleado?idEmpleado=" + idEmpleado + "&nombre=" + nombre + "&correo=" + correo+"&telefono="+telefono+"&tipo="+tipo, true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) { 

                var resp = this.responseText;
                if (resp === "vacio") {
                    alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
                } else if (resp === "error") {
                    alertaErrorAdministrador("Ah ingresado números en el nombre ó letras en el telefono");
                }else if(resp === "correoRepetido"){
                    alertaErrorAdministrador("El correo electronico ya fue");
                }else if (resp === "numeroTam"){
                    alertaErrorAdministrador("El número telefonico debe tener 8 digitos");
                }else if (resp === "correcto") {
                    alertaCorrectoAdministrador("¡Empleado Modificado correctamente!","./listadoempleado");
                }else if(resp === "idRepetido"){
                    alertaErrorAdministrador("El id ó el correo ya se encuentra registrado");
                }else if(resp === "incorrecto"){
                    alertaErrorAdministrador("No se pudo modificar correctamente");
                }
            }
        };
    }
}

