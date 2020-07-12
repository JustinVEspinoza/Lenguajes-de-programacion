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
