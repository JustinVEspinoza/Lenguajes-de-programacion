function loguear() {

    var contenedor = document.getElementById("contenedor");
    
    var nUsuario = document.getElementById("nUsuario").value;
    var contra = document.getElementById("contra").value;

      if(nUsuario == "" || contra == ""){
        
        alertaErrorCliente("Debe llenar ambos espacios");
    }else{
    var xhttp = new XMLHttpRequest();
     
        
    xhttp.open("POST", "../login_cliente", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("nUsuario=" +nUsuario+"&contra="+contra);
    }
    xhttp.onreadystatechange = function () {

if (this.readyState === 4 ) {
           
            var resp = this.responseText;
            if (resp === "vacio") {
                
                alertaErrorCliente("Debe llenar ambos espacios");
            } else if(resp === "noExiste"){
                
                alertaAdvertenciaCliente("Los datos no corresponden a ningun usuario registrado");
            } else if(resp === "existe"){
                
                alertaCorrectoCliente("Bienvenido","");
                
            } 
            
        }
    };
}