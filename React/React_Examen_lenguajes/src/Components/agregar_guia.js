import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';
function AgregarGuia(){
	const[width]=useState("55px");
	const[width2]=useState("450px");
	const[height]=useState("55px");
	const [border]=useState("groove");
	const [codigo,setCodigo]=useState("");
	const [numero_guia,setNumero]=useState("");
	const [fecha,setFecha]=useState("");
	const [hora,setHora]=useState("");
	const [nombre,setNombre]=useState("");
	const[productos,setProductos]=useState([]);
	let [lista,setLista]=useState([]);
	function validarNumerosDos(e){
		const pattern = /[0-9]/;
		const inputChar = e.value.charAt(e.value.length-1);
	    if (pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      
	    }else{
	    	
	    }
	}
	function validarNumerosDos(e){
		const pattern = /[0-9]/;
		var validator=false;
		const inputChar = e.value.charAt(e.value.length-1);
	    if (pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      //setHora(e.value);
	      validator=true;
	    }else{
	    	
	    }
	    return validator;
	}
	function  mascaraHora(e){
  	if(validarNumerosDos(e.target)===true){
	  	var temp=e.target.value;
	  	const regex =":";
	  	temp=temp.replace(regex,"");
	  	var ultimaLetra=temp.substring(temp.length-1,temp.length);
	  	if(temp.length==3 || temp.length==5){
	  		setHora(hora+":"+ultimaLetra);
	  	}else{
	  		if(temp.length==8){
	  			 e.preventDefault();
	  		}else{
	  			setHora(hora+""+ultimaLetra);
	  		}
	  	}
  	}
  	
  }
  function mascaraNumeroGuia(e){
  	const pattern = /[0-9]/;
  	var guiaTemp=e.target.value;
	var ultimaLetra=guiaTemp.substring(guiaTemp.length-1,guiaTemp.length);
	if(guiaTemp.length<4){
		if(pattern.test(ultimaLetra)){
			 e.preventDefault();
		}else{
			
			setNumero(guiaTemp);
		}
	}else{
		if(guiaTemp.length===4){
			//this.guia.numero_guia=this.guia.numero_guia+"-";
			if(pattern.test(ultimaLetra)){
				setNumero(numero_guia+"-"+ultimaLetra);
			}
			
		}else{
			if(!pattern.test(ultimaLetra) || guiaTemp.length>7){
			 e.preventDefault();
			}else{
				setNumero(guiaTemp);
			}
		}
		
		
	}
  }
  function cargar(){
  	add();
  }
  function validarPalabras(e){
  	const pattern = /[A-Za-z ]/;
  	var texto=e.value;
  	
	    const inputChar = texto.charAt(texto.length-1);
	    if (pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      setNombre(e.value);
	    }
  }
  function add(){
  	var validar=true;
  	for(var i=0;i<productos.length;i++){
	
		if(productos[i].codigo==codigo){
			productos[i].cantidad=productos[i].cantidad+1;
			validar=false;
			getRows();
		}
		
	}
	if(validar===true){
	  	axios.get('http://localhost:4000/Examen/Producto/'+codigo)
					.then(res => {
							   
						console.log(res["data"]);
						const obj=res["data"];
						
	         			obj["cantidad"]=1;
	         			console.log(obj);
			    	 	productos.push(obj);
			    	 	console.log(productos);
			    	 	getRows();
					 }).catch((error) => {
						console.log(error);
					});
	}
  	
        
   	
  	console.log(productos);
  }
  function setCodigos(e){
  	setCodigo(e.target.value)
  }
  function setFechas(e){
  	setFecha(e.target.value);
  }
  function agregar(){
  		axios.get('http://localhost:4000/Examen/Guia/'+numero_guia)
					.then(res => {
							   
						
						 if(res["data"]["numero_guia"]===""){
						 	if(fecha==="" || hora==="" || nombre===""){
						 		 Swal.fire({
	                                icon: 'error',
	                                title: 'Oops...',
	                                text: 'Hay datos que faltan ingresar',
	                                footer: ''
                            	})
						 	}else{


							 	const guia={numero_guia,fecha,hora,"nombre_despachador":nombre};
							 	
							 	axios.post('http://localhost:4000/Examen/Guia/',guia)
									.then(res => {
											   
										console.log(res["data"]);
										for(var i=0;i<productos.length;i++){
								  			
								  			const despacho={"numero_guia":numero_guia,"codigo":productos[i].codigo,"cantidad":productos[i].cantidad};
								  			axios.post('http://localhost:4000/Examen/Guia/Despacho',despacho)
												.then(res => {
														   
													console.log(res["data"]);
													
												 }).catch((error) => {
													console.log(error);
												});
								  		}
										 Swal.fire('Ingresado satisfactoriamente la informacion')
									 }).catch((error) => {
										console.log(error);
									});
							}
						 }else{
						 	Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Esa guia ya existe',
                                footer: ''
                            })
						 }
					 }).catch((error) => {
						console.log(error);
					});

  }
  function getRows(){

          const   items = productos.map((p, idx) => {
				    		var validator="True";
				    		var url="http://localhost:4000/Examen/Imagenes/"+p.imagen;
				    		if(p.grabado["data"]==0){
				    			
				    			validator="False";
				    		}
				            return( <tr key={idx}>

				            	<td>{p.codigo}</td>
					        <td>{p.descripcion}</td>
					        <td>{p.precio}</td>
					        <td>{validator}</td>
					        <td><img src={url} style={{width,height}} /></td>
					        <td>{p.cantidad}</td>
				                
				             </tr>);
      					});
	  setLista(items);
	}
 
  

	return(
			<div>
			<div className="container-fluid h-100 bg-light text-dark">
  <div className="row justify-content-center align-items-center" >
  
  <div style={{border}}>
  <div className="">
	 <h2>Ingresar nueva Guia</h2>
    <div className="form-group">
      <label>Numero Guia:</label>
      <input id="numero_guia" value={numero_guia} className="form-control" placeholder="Numero de guia" name="numero_guia" onChange={e=>mascaraNumeroGuia(e)} />
      
    </div>
    <div className="form-group">
      <label >Fecha:</label>
      <input type="date" id="fecha" onChange={e=>setFechas(e)}className="form-control" placeholder="Fecha" name="fecha"/>
      
    </div>
    <div className="form-group">
      <label >hora:</label>
      <input id="hora" value={hora}onChange={e=>mascaraHora(e)} className="form-control" placeholder="Hora" name="hora" />
      
    </div>
		<div className="form-group">
      <label >Nombre despachador:</label>
      <input id="nombre_despachador" value={nombre} className="form-control" placeholder="nombre de despachador" name="nombre_despachador" onChange={e=>validarPalabras(e.target)}/>
      
    </div>
    <div className="form-inline">
      <label >Producto:</label>
      <input id="codigo" defaultValue={codigo} onChange={e=>setCodigos(e)} className="form-control" style={{width2}} placeholder="Codigo de producto agregar" name="codigo" />
      <button type="submit" className="btn btn-primary btn-sm" onClick={e=>cargar()}>Asociar</button>
      <div className="container" >
<div className="row">
	<div className="col-sm-12 justify-content-center">
		
	<table className="table table-hover">
	    <thead>
	      <tr>
	        <th>Codigo</th>
	        <th>Descripcion</th>
	        <th>Precio</th>
	        <th>Imagen</th>
	        <th>Cantidad</th>
	      </tr>
	    </thead>
	    <tbody>
	      {lista}
	      
	    </tbody>
	  </table>
	</div>
	</div>
</div>
    </div>
		<div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={e=>agregar()}>Submit</button>
      </div>
  	 </div>
  	</div>
 <div style={{height}}>
   </div>
</div>

</div>
			</div>
		);
}
export default AgregarGuia;