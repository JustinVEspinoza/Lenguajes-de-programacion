
function modificar() {
    var contenedor = document.getElementById("container");
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "./modificar_producto_utensilio?nombre=" + nombre + "&precio=" + precio + "&cantidad=" + cantidad
            + "&codigo=" + codigo + "&tipoObjeto=producto", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4) {

            var resp = this.responseText;
            if (resp === "vacio") {

                alertaErrorAdministrador("Por favor no deje campos vacíos");
            } else if (resp === "numerico") {

                alertaErrorAdministrador("Datos erroneos");
            } else if (resp === "nombre") {

                alertaErrorAdministrador("Datos erroneos");
            } else if (resp === "modificado") {
                alertaCorrectoAdministrador("Datos modificados", "./listadoproductos");
                //window.location.href="./listadoproductos";
            }
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


function insertar() {

    var contenedor = document.getElementById("contenedor");

    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var codigo = document.getElementById("codigo").value;
    var fecha = document.getElementById("fecha").value;
    var idRestaurante = document.getElementById("idRestaurante").value;
    var idCategoria = document.getElementById("idCategoria").value;
    var tipoObjeto = document.getElementById("tipoObjeto").value;
    var imagen = document.getElementById("imagen").value;

    if (nombre == "" || precio == "" || cantidad == "" || codigo == "" || fecha == "" || codigo == "" || imagen == "") {

        alertaAdvertenciaAdministrador("Debe llenar todos los espacios");
    } else {
        var xhttp = new XMLHttpRequest();

        xhttp.open("POST", "./insertar_producto_utensilio", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&precio=" + precio + "&cantidad=" + cantidad
                + "&codigo=" + codigo + "&fecha=" + fecha + "&idRestaurante=" + idRestaurante + "&idCategoria=" + idCategoria
                + "&tipoObjeto=" + tipoObjeto + "&imagen=" + imagen);


    }
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4) {

            var resp = this.responseText;
            if (resp === "vacio") {

                alertaErrorAdministrador("Debe llenar todos los espacios");
            } else if (resp === "numerico") {

                alertaErrorAdministrador("Los datos precio,cantidad y codigo debden ser numericos");
            } else if (resp === "nombre") {

                alertaErrorAdministrador("El nombre debe lleva3r solo letras");
            } else {

                if (resp === "invalido") {
                    alertaErrorAdministrador("El codigo insertado ya esta en uso");
                } else {
                    if (resp === "id") {
                        alertaAdvertenciaAdministrador("Datos Insertados");
                    }
                }
            }
        }
    };
}
function buscar() {
    var contenedor = document.getElementById("contenedor");
    var codigo = document.getElementById("buscar").value;
    var xhttp = new XMLHttpRequest();
    if (codigo != "") {
        xhttp.open("GET", "./busqueda_producto_utensilios?codigo=" + codigo + "&tipoObjeto=producto", true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {

                contenedor.innerHTML = this.responseText;
                alertaAdvertenciaAdministrador("Busqueda Finalizada");
            }
        };
    }
}