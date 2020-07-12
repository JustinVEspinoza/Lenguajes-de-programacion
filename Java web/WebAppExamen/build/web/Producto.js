var grabado=1;
var subido=0;
var nombre="";
function delete_producto(codigo){
    if(validar(codigo)===false){
        var data="producto.do?method=delete&codigo="+codigo;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",data,true);
        xhttp.send();
        var contenedor = document.getElementById("contener"); //div
        xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){

                    Swal.fire('Producto eliminado con exito')
                     contenedor.innerHTML = this.responseText;
            }

        };
    }else{
        Swal.fire('Producto no puede ser eliminado ')
    }
    
}
function validar(codigo){
    var validator=true;
    var data="producto.do?method=validarDelete&codigo="+codigo;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",data,true);
    xhttp.send();
   
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
               
                 console.log(this.responseText);
                 if(this.responseText=="false"){
                     console.log(this.responseText);
                    validator=false;
                 }
        }
        
    };
    return validator;
}

function validarPalabras(event){
    const pattern = /[A-Za-z]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
 function  validarNumeros(event){
    const pattern = /[0-9.]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
 function  validarNumerosDos(event){
    const pattern = /[0-9]/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
 function validarCheckbox(id){
  	
  		if(id.id=="cb1"){
  			var cb1=document.getElementById("cb1");
                        cb1.checked = true; 
                        var cb2=document.getElementById("cb2");
                         cb2.checked = false; 
                         grabado=1;
  		}else{
                    var cb1=document.getElementById("cb1");
                     cb1.checked = false; 
  			var cb2=document.getElementById("cb2");
                         cb2.checked = true; 
                         grabado=0;
  		}
  	
  }
  function fileChange(element) {
    
    this.upload(element.target.files);
  }
  
 function  upload(element) {
    let formData = new FormData();
      formData.append("uploads[]", element[0], element[0].name);
      nombre=element[0].name;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4000/Examen/Producto/Imagen", true);
    
    xhttp.send(formData);

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            var resp = this.responseText;
            subido=1;
        }
    };
   
  }
  function agregar(){

    	if( subido===1){
    		
		    
		    	var imagen=document.getElementById("inputGroupFile01").value;
                        var tem=imagen.split("\\");
                        console.log(tem);
                        imagen=imagen=tem[2];
                        var nombre=document.getElementById("descripcion").value;
                        var codigo=document.getElementById("codigo").value;
                        var precio=document.getElementById("precio").value;
                        var cantidad=document.getElementById("cantidad").value;
                        if(nombr=="" || precio=="" || cantidad==""){
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Faltan datos que ingresar',
                                footer: ''
                            })
                        }else{
                            
                        
                            var data="producto.do?method=agregar&codigo="+codigo+"&descripcion="+nombre+"&imagen="+imagen+"&precio="+precio+"&cantidad="+cantidad+"&grabado="+grabado;
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("GET",data,true);
                            xhttp.send();
                            var contenedor = document.getElementById("contener"); //div
                            xhttp.onreadystatechange = function(){
                                if(this.readyState === 4 && this.status === 200){

                                    Swal.fire('Producto ingresado con exito')

                                }

                            };
                        }

    	}else{
    		 Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No has agregado la imagen',
                                footer: ''
                            })
    	}
    }