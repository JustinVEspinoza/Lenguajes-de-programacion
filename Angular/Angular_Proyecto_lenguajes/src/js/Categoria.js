function validarModificar() {
    var idCategoria = document.getElementById("idCategoria").value;
    var tipoProducto = document.getElementById("tipoProducto").value;
    var nombreAgente = document.getElementById("nombreAgente").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "./modificarcategoria", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("idCategoria=" + idCategoria + "&tipoProducto=" + tipoProducto + "&nombreAgente=" + nombreAgente);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var resp = this.responseText;
            if (resp === "invalido") {

                alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
            } else if (resp === "tamanoIncompletoCodigo") {

                alertaErrorAdministrador("Faltan dígitos para completar el código");
            } else if (resp === "noNumeros") {

                alertaErrorAdministrador("Ingrese solo números en el campo código");
            } else if (resp === "noLetras") {

                alertaErrorAdministrador("Ingrese solo letras en los campos categoria y agente");
            } else if (resp === "valido") {

                alertaCorrectoAdministrador("¡Completado con exito!","./listacategorias");
            }
        }
    };
}

function validarBusqueda() {
    var contenedor = document.getElementById("contenedor");
    var busqueda = document.getElementById("txtbuscar").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "./buscarcategoria", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("busqueda=" + busqueda);

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            contenedor.innerHTML = this.responseText;
        }
    };
}

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

function insertarCategoria() {

    var idCategoria = document.getElementById("idCategoria").value;
    var tipoProducto = document.getElementById("tipoProducto").value;
    var nombreAgente = document.getElementById("nombreAgente").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "./insertarcategoria", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("idCategoria=" + idCategoria + "&tipoProducto=" + tipoProducto + "&nombreAgente=" + nombreAgente);

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            var resp = this.responseText;
            if (resp === "invalido") {
                
                alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
            } else if (resp === "tamanoIncompletoCodigo") {

                alertaErrorAdministrador("Faltan dígitos para completar el código");
            } else if (resp === "idCategoriaRepetida") {

                alertaErrorAdministrador("El código ya existe, por favor revisar");
            } else if (resp === "valido") {

                alertaCorrectoAdministrador("¡Completado con exito!","./parametrosinsertarcategoria");
            }
        }
    };
}
