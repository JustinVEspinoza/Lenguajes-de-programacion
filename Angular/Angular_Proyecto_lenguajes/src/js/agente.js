function searchbyFilters(){
     var contenedor = document.getElementById("table"); //div
    var clave=document.getElementById("txtbuscar").value;
    var data="FiltroAgente?clave="+clave;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
             contenedor.innerHTML = this.responseText;
        }
        
    };

}

function add_Agente(){
    var nombre=document.getElementById("txtNombre").value;
    var correo=document.getElementById("txtCorreo").value;
    var codigo=document.getElementById("txtCodigo").value;
    var telefono=document.getElementById("txtTelefono").value;

    var data="../AgregarAgente?nombre="+nombre+"&correo="+correo+"&codigo="+codigo+"&telefono="+telefono;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
            if(this.responseText==="ok"){
                 alertaCorrectoAdministrador("Ha ingresado al nuevo agente con exito","agregar_agente.jsp");
                 
            }else{
                if(this.responseText==="error_formato"){
                    alertaAdvertenciaAdministrador("Alguno de los parametros no cumple con el formato");
                }else{
                    if(this.resposneText==="error_vacio"){
                        alertaErrorAdministrador("Alguno de los parametros esta vacio");
                    }
                }
            }
        }
        
    };
}
function update_Agente(){
    var nombre=document.getElementById("txtNombre").value;
    var correo=document.getElementById("txtCorreo").value;
    var codigo=document.getElementById("txtCodigo").value;
    var telefono=document.getElementById("txtTelefono").value;

    var data="ModificarAgente?nombre="+nombre+"&correo="+correo+"&codigo="+codigo+"&telefono="+telefono;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
            if(this.responseText==="ok"){
                 alertaCorrectoAdministrador("Ha modificado al agente con exito","ListaAgentes");
                 
            }else{
                if(this.responseText==="error_formato"){
                    alertaAdvertenciaAdministrador("Alguno de los parametros no cumple con el formato");
                }else{
                    if(this.resposneText==="error_vacio"){
                        alertaErrorAdministrador("Alguno de los parametros esta vacio");
                    }
                }
            }
        }
        
    };
}
function delete_agente(codigo){

    var data="EliminarAgente?codigo="+codigo;
    alert(codigo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();
    var contenedor = document.getElementById("table"); //div
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
                 alertaCorrectoAdministradorV2("Ha eliminado con exito");
                 contenedor.innerHTML = this.responseText;
        }
        
    };
}

