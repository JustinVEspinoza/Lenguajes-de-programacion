function alertaErrorCliente(mensaje) {
    Swal.fire({
        icon: 'error',
        title: '¡Hubo un error!',
        text: mensaje,
        confirmButtonColor: '#3085d6'
    });
}

function alertaAdvertenciaCliente(mensaje) {
    Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: mensaje,
        confirmButtonColor: '#3085d6'
    });
}

function alertaCorrectoCliente(mensaje, direccion) {

    Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: mensaje,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.value) {
            window.location = direccion;
        }
    });
}

function alertaErrorAdministrador(mensaje) {
    Swal.fire({
        icon: 'error',
        title: '¡Hubo un error!',
        text: mensaje,
        confirmButtonColor: '#FB9947'
    });
}

function alertaAdvertenciaAdministrador(mensaje) {
    Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: mensaje,
        confirmButtonColor: '#FB9947'
    });
}

function alertaCorrectoAdministrador(mensaje, direccion) {

    Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: mensaje,
        confirmButtonColor: '#FB9947',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.value) {
            window.location = direccion;
        }
    });
}
function alertaCorrectoAdministradorV2(mensaje) {

    Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: mensaje,
        confirmButtonColor: '#FB9947',
        confirmButtonText: 'Aceptar'
    });
}