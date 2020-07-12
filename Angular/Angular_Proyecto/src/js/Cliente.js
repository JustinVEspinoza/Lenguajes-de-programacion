function validarModificar() {
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "./ModificarCliente", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("cedula=" + cedula + "&nombre=" + nombre + "&correo=" + correo + "&telefono=" + telefono);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var resp = this.responseText;
            if (resp === "invalido") {

                alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
            } else if (resp === "tamanoIncompletoCedula") {

                alertaErrorAdministrador("Faltan dígitos para completar la cedula");
            } else if (resp === "tamanoIncompletoTelefono") {

                alertaErrorAdministrador("Faltan dígitos para completar el teléfono");
            } else if (resp === "correoIncorrecto") {

                alertaErrorAdministrador("Formato de correo incorrecto");
            } else if (resp === "noNumeros") {

                alertaErrorAdministrador("Ingrese solo números en los campos cédula y téledono");
            } else if (resp === "noLetras") {

                alertaErrorAdministrador("Ingrese solo letras en el campo nombre");
            } else if (resp === "valido") {

                alertaCorrectoAdministrador("¡Completado con exito!", "./ListaClientes");
            }
        }
    };
}

function validarBusqueda() {
    var contenedor = document.getElementById("contenedor");
    var busqueda = document.getElementById("txtbuscar").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "./BuscarCliente", true);
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
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
            tecla_especial = false;
    if (letras.indexOf(tecla) === -1) {
        return false;
    }
}

function insertarCliente() {
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "../InsertarCliente", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("cedula=" + cedula + "&nombre=" + nombre + "&correo=" + correo + "&telefono=" + telefono);

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            var resp = this.responseText;
            if (resp === "invalido") {
                alertaAdvertenciaAdministrador("Por favor no deje campos vacíos");
            } else if (resp === "tamanoIncompletoCedula") {

                alertaErrorAdministrador("Faltan dígitos para completar el formato de la cédula");
            } else if (resp === "tamanoIncompletoTelefono") {

                alertaErrorAdministrador("Faltan dígitos para completar el teléfono");
            } else if (resp === "correoIncorrecto") {

                alertaErrorAdministrador("Formato de correo incorrecto");
            } else if (resp === "noNumeros") {

                alertaErrorAdministrador("Ingrese solo números en los campos cédula y téledono");
            } else if (resp === "noLetras") {

                alertaErrorAdministrador("Ingrese solo letras en el campo nombre");
            } else if (resp === "cedulaRepetida") {

                alertaErrorAdministrador("La cedula ingresada ya existe, por favor revisar");
            } else if (resp === "valido") {

                alertaCorrectoAdministrador("¡Completado con exito!", "./insertar_cliente.jsp");
            }
        }
    };
}
