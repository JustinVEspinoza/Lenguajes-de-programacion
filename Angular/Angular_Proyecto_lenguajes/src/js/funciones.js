function validarModificar() {
    var contenedor = document.getElementById("container");
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

                contenedor.innerHTML = "<h2>Por favor no deje campos vacíos</h2>";
            } else if (resp === "tamanoIncompletoCedula") {

                contenedor.innerHTML = "<h2>Faltan dígitos para completar la cedula</h2>";
            } else if (resp === "tamanoIncompletoTelefono") {

                contenedor.innerHTML = "<h2>Faltan dígitos para completar el teléfono</h2>";
            } else if (resp === "correoIncorrecto") {

                contenedor.innerHTML = "<h2>Formato de correo incorrecto</h2>";
            } else if (resp === "noNumeros") {

                contenedor.innerHTML = "<h2>Ingrese solo números en los campos cédula y téledono</h2>";
            } else if (resp === "noLetras") {

                contenedor.innerHTML = "<h2>Ingrese solo letras en el campo nombre</h2>";
            } else if (resp === "valido") {
                window.location.href = "./ListaClientes";
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

function validarNumeros(evt) {

    tecla = (document.all) ? evt.keyCode : evt.which;

    if ((tecla > 47 && tecla < 58) || tecla === 8 || tecla === 13 || tecla === 6) {
        return true;
    } else {
        return false;
    }
}

function validarPalabras(evt) {

    digitos = (document.all) ? evt.keyCode : evt.which;
    tecla = String.fromCharCode(digitos).toLowerCase(),
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
            especiales = [8, 37, 39, 46],
            tecla_especial = false;

    for (var i in especiales) {
        if (digitos === especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) === -1 && !tecla_especial) {
        return false;
    }
}

function insertarCliente() {
    alert();
    var contenedor = document.getElementById("contenedorFormulario");
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
                contenedor.innerHTML = "<h2>Por favor no deje campos vacíos</h2>";
            } else if (resp === "tamanoIncompletoCedula") {

                contenedor.innerHTML = "<h2>Faltan dígitos para completar la cedula</h2>";
            } else if (resp === "tamanoIncompletoTelefono") {

                contenedor.innerHTML = "<h2>Faltan dígitos para completar el teléfono</h2>";
            } else if (resp === "correoIncorrecto") {

                contenedor.innerHTML = "<h2>Formato de correo incorrecto</h2>";
            } else if (resp === "noNumeros") {

                contenedor.innerHTML = "<h2>Ingrese solo números en los campos cédula y téledono</h2>";
            } else if (resp === "noLetras") {

                contenedor.innerHTML = "<h2>Ingrese solo letras en el campo nombre</h2>";
            } else if (resp === "valido") {
                window.location.href = "./insertar_cliente.jsp";
            }
        }
    };
}
