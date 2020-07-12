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

function ingresar(){
     var user = document.getElementById("user").value;
     var psw = document.getElementById("psw").value;
      var xhttp = new XMLHttpRequest();

    if(user === "" || psw === ""){
        alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
        
    }else{
        xhttp.open("GET", "../iniciosesion?"+"user=" + user +"&psw="+psw, true);
    
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resp = this.responseText;
                window.location=resp;
            }
        };
    }
}

function registrarse() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var psw = document.getElementById("psw").value;
    
    var xhttp = new XMLHttpRequest();

    if(nombre === "" || correo === "" || telefono === ""){
        alertaAdvertenciaAdministrador("Alguno de los campos se encuentra vacio");
        return false;
    }else{
        xhttp.open("POST", "../registroadministrador", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&correo=" + correo + "&telefono=" + telefono+"&psw="+psw);

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
                    alertaCorrectoAdministrador("¡Registrado correctamente!","./registro_administrador.jsp");
                }else if(resp === "incorrecto"){
                    alertaErrorAdministrador("Oh.. no se pudo ingresar el empleado");
                }
            }
        };
    }
}