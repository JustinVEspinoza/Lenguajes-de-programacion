function searchbyFilters(){
     var contenedor = document.getElementById("table"); //div
    var clave=document.getElementById("txtbuscar").value;
    var data="FiltroMenu?clave="+clave;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
             contenedor.innerHTML = this.responseText;
        }
        
    };

}

function add_platillo(){
    var nombre=document.getElementById("txtNombre").value;
    var descripcion=document.getElementById("txtDescripcion").value;
    var descuento=document.getElementById("txtDescuento").value;
    var precio=document.getElementById("txtPrecio").value;
    var racion=document.getElementById("txtRacion").value;
    var calorias=document.getElementById("txtCalorias").value;
    var ImageURL="localhost";
    var data="../AgregarMenu?nombre="+nombre+"&descripcion="+descripcion+"&descuento="+descuento+"&precio="+precio+"&racion="+racion+"&calorias="+calorias+"&ImageURL="+ImageURL;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
            if(this.responseText==="ok"){
                 alertaCorrectoAdministrador("Ha guardado con exito el platillo","./agregar_platillo.jsp");
                 
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
function update_platillo(){
     var nombre=document.getElementById("txtNombre").value;
    var descripcion=document.getElementById("txtDescripcion").value;
    var descuento=document.getElementById("txtDescuento").value;
    var precio=document.getElementById("txtPrecio").value;
    var racion=document.getElementById("txtRacion").value;
    var calorias=document.getElementById("txtCalorias").value;
    
    var codigo=document.getElementById("txtCodigo").value;
    var data="ModificarMenu?txtNombre="+nombre+"&txtDescripcion="+descripcion+"&txtDescuento="+descuento+"&txtPrecio="+precio+"&txtRacion="+racion+"&txtCalorias="+calorias+"&txtCodigo="+codigo;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
            if(this.responseText==="ok"){
                 alertaCorrectoAdministrador("Ha modificado con exito el platillo","ListaMenu");
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
function delete_platillo(codigo){

    var data="EliminarMenu?codigoMenu="+codigo;
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

