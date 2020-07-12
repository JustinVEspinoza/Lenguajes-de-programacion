var productos=[];
function validarNumerosDos(event){
    const pattern = /[0-9]/;
    var validar=true;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
        validar=false;
    }
    return validar;
  }
 function  validarPalabras(event){
    const pattern = /[A-Za-z]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  function mascaraHora(e){
      var hora=document.getElementById("hora").value;
  	if(this.validarNumerosDos(e)){
	  	var temp=hora;
	  	const regex =":";
	  	temp=temp.replace(regex,"");
	  	if(temp.length==2 || temp.length==4){
                        document.getElementById("hora").value=document.getElementById("hora").value+":";
	  	}else{
	  		if(temp.length==7){
	  			 e.preventDefault();
	  		}
	  	}
  	}
  	
  }
  
  function agregar(){
  	
    
  	if(productos.length>0){
            var numero_guia=document.getElementById("numero_guia").value;
            var data = "guia.do?method=validarGuia&numero=" + numero_guia;
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", data, true);
            xhttp.send();
            var contenedor = document.getElementById("contener"); //div
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.responseText);
                    if(this.responseText=="false"){
                        var fecha=document.getElementById("fecha").value;
                         var hora=document.getElementById("hora").value;
                          var nombre=document.getElementById("nombre_despachador").value;
                        var data2 = "guia.do?method=insertarGuia&numero=" + numero_guia+"&fecha="+fecha+"&hora="+hora+"&nombre="+nombre;
                        if(fecha=="" || hora=="" || nombre==""){
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Hay datos que faltan ingresar',
                                footer: ''
                            })
                        }else{
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("GET", data2, true);
                            xhttp.send();
                            var contenedor = document.getElementById("contener"); //div
                            xhttp.onreadystatechange = function () {
                                if (this.readyState === 4 && this.status === 200) {

                                    for(var i=0;i<productos.length;i++){
                                        var data3 = "guia.do?method=insertarDespacho&numero=" + numero_guia+"&codigo="+productos[i]["codigo"]+"&cantidad="+productos[i]["cantidad"];
                                        var xhttp = new XMLHttpRequest();
                                        xhttp.open("GET", data3, true);
                                        xhttp.send();
                                        var contenedor = document.getElementById("contener"); //div
                                        xhttp.onreadystatechange = function () {
                                            if (this.readyState === 4 && this.status === 200) {

                                            }
                                        };
                                    }
                                    Swal.fire('Ingresado satisfactoriamente la informacion')
                                }
                            };
                        }
                    }else{
                         Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Esa guia ya existe',
                                footer: ''
                            })
                    }
                }
            };
            
                
	  	
	  }else{
	  	 Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No has agregado ni un producto',
                                footer: ''
                            })
	  }
  }
  function add(){
      var codigo=document.getElementById("codigo").value;
      
     var data="guia.do?method=add&codigo="+codigo;
                        var xhttp = new XMLHttpRequest();
                        xhttp.open("GET",data,true);
                        xhttp.send();
                        var contenedor = document.getElementById("contener"); //div
                        xhttp.onreadystatechange = function(){
                            if(this.readyState === 4 && this.status === 200){

                                console.log("'"+this.responseText+"'");
                                if(this.responseText!="error"){
                                    var texto=this.responseText.replace(/{/g,"");
                                    texto=this.responseText.replace(/}/g,"");
                                    var vec=texto.split(",");
                                    var codigo=vec[0].split(":")[1];
                                    var descripcion=vec[1].split(":")[1];
                                    var precio=vec[2].split(":")[1];
                                    var tem=vec[3].split(":")[1];
                                    var grabado=true;
                                   grabado=tem;


                                    var imagen=vec[4].split(":")[1];
                                    var cantidad=1;
                                    var json={codigo,descripcion,precio,grabado,imagen,cantidad};
                                    var validator=true;
                                    if(productos.length>0){

                                        for(var i=0;i<productos.length;i++){
                                            console.log(productos[i]["codigo"]);
                                            if(productos[i]["codigo"]==json["codigo"]){
                                                
                                                productos[i]["cantidad"]=productos[i]["cantidad"]+1;
                                                validator=true;
                                            }else{
                                                validator=false;
                                            }
                                        }
                                        if(validator==false){
                                            
                                             productos.push(json);

                                        }
                                        
                                    }else{
                                        productos.push(json);
                                        
                                    }
                                }
                                 llenarTabla();  
                            }
                            

                        };
  }
  
  function llenarTabla(){
      var id=document.getElementById("contenedor");
      var cadena="";
      for(var i=0;i<productos.length;i++){
           cadena+="<tr>"
           +"<td>"+productos[i]["codigo"]+"</td>"
           +"<td>"+productos[i]["descripcion"]+"</td>"
            +"<td>"+productos[i]["precio"]+"</td>"
            +"<td>"+productos[i]["grabado"]+"</td>"
            +"<td><img src='http://localhost:4000/Examen/Imagenes/"+productos[i]["imagen"]+"' style='width:55px;height:55px;'></img></td>"
            +"<td>"+productos[i]["cantidad"]+"</td></tr>";
          
      }
      id.innerHTML=cadena;
  }
function mascaraNumeroGuia(e){
	var guiaTemp=document.getElementById("numero_guia").value;
	const pattern = /[0-9]/;

	if(guiaTemp.length<3){
		if(pattern.test(e.key)){
			 e.preventDefault();
		}
	}else{
		if(guiaTemp.length===3){
			
                        document.getElementById("numero_guia").value=document.getElementById("numero_guia").value+"-";
		}
		if(!pattern.test(e.key) || guiaTemp.length>6){
			 e.preventDefault();
		}
	}
}

  function cargar(){
  	add();
  	
  }