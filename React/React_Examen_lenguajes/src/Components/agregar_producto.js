import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';
function AgregarProducto() {
	const [height]=useState("300px");
	const [border]=useState("groove");
	const[uploadedFiles,setuploadedFiles]=useState(null);
	const [descripcion,setDescripcion]=useState("");
	const [precio,setPrecio]=useState("");
	const [cantidad,setCantidad]=useState(0);
	const [grabado,setGrabado]=useState(1);
	const [codigo,setCodigo]=useState("");
	const [imagen,setImage]=useState("");
	const [contador,setContador]=useState(0);
		const [margin]=useState("margin-left:5%");

	const [checkbox,setCheckbox]= useState([
    { id:"op1", nombre: "True", checked: true },
    { id:"op2",nombre: "False", checked: false }
  ]);
	useEffect(() => {
		    (async () => {        
	 			const l = await axios.get(
		        "http://localhost:4000/Examen/Producto/getNewId/"
		      );
	 			
		      setCodigo(l.data[0]["codigo"]);
	 		})();
		  }, []);
  function validarCheckbox(id){
  	
  		if(id==="op1"){
  			setCheckbox([{ id:"op1", nombre: "True", checked: true },
    { id:"op2",nombre: "False", checked: false }]);
  			setGrabado(1);
  			//checkbox[i]["checked"]=false;
  		}else{
  			if(id==="op2"){
  					setGrabado(0);
  				setCheckbox([{ id:"op1", nombre: "True", checked: false },
    { id:"op2",nombre: "False", checked: true }]);
  			}
  		}
  	
  }
	function agregar(){
		if(descripcion==="" || precio<=0 || imagen==="" || cantidad<=0){
			Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Faltan datos que ingresar',
                                footer: ''
                            })
		}else{
			const obj={codigo,descripcion,precio,grabado,imagen,cantidad};
			axios.post('http://localhost:4000/Examen/Producto/',obj)
							         .then(res => {
							   
							            console.log(res["data"]);
										  Swal.fire('Producto ingresado con exito')
							          }).catch((error) => {
							             console.log(error);
							        });
		}
	}
	function validarNumeros(e){
		 const pattern = /[0-9.]/;

		 if(e.value.charAt(e.value.length-1)==="."){
		 	if(e.value.charAt(e.value.length-1)==="." && e.value.length===1){
		 		setContador(contador+10);
		 	}else{
		 		setContador(contador+1);
		 	}
		 	
		 }
		 
		const inputChar = e.value.charAt(e.value.length-1);
	    if (pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      setPrecio(e.value);
	    }else{
	    	
	    }
		 console.log(contador);
	    

	}
	function validarNumerosDos(e){
		const pattern = /[0-9]/;
		const inputChar = e.value.charAt(e.value.length-1);
	    if (pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      setCantidad(e.value);
	    }else{
	    	
	    }
	}
	function validarPalabras(e){
		
		const pattern = /[A-Za-z]/;
	    const inputChar = e.value.charAt(e.value.length-1);
	    if (!pattern.test(inputChar)) {    
	        // invalid character, prevent input
	      
	    }else{
	    	setDescripcion(e.value);
	    }
		
	}
	function fileChange(element) {
    //setuploadedFiles(element.target.files);
    console.log(element.target.files[0]);
    upload(element.target.files[0]);
  }
  function noact(){}
 function upload(element) {
    const formData = new FormData();
    setImage(element.name);
      formData.append("uploads[]", element, element.name);
    axios.post('http://localhost:4000/Examen/Producto/Imagen',formData)
						         .then(res => {
						   
						            console.log(res["data"]);
		
						          }).catch((error) => {
						             console.log(error);
						        });
    }
  const itemsCB= checkbox.map((cb, idx) => {
  		
  		return(<div key={idx}>
  				 <input type="checkbox" checked={cb.checked} className="form-check-input"  name="remember" id={cb.id} onChange={e=>validarCheckbox(cb.id)} /> 
        
        		<label>{cb.nombre}</label>
        		</div>
  			);
  });
  
  return (
    <div>
    	<div className="container-fluid h-100 bg-light text-dark">
  <div className="row justify-content-center align-items-center" >
  
  <div style={{border}}>
  <div className="">
    <h2>Ingresar nuevo producto</h2>
    <div className="form-group">
      <label >Codigo:</label>
      <input type="text" id="codigo" defaultValue={codigo} className="form-control" placeholder="Codigo" name="codigo" onChange={noact()} disabled="disabled"/>
      
    </div>
    <div className="form-group">
      <label >Descripcion:</label>
      <input type="text" id="descripcion" value={descripcion} className="form-control" placeholder="Ingrese una descripcion" name="descripcion" onChange={e=>validarPalabras(e.target)} required />
    </div>
    <div className="form-group">
      <label >Precio:</label>
      <input type="text" id="precio" value={precio} className="form-control"  placeholder="Ingrese el precio del producto" name="precio" onChange={e=>validarNumeros(e.target)} />
    </div>

    <div className="form-group">
       <label >Grabado:</label>
       <div className="form-check" style={{margin}} >
         {itemsCB}
          
        </div>
       
    </div>
    
     <form action="/upload" method="post" encType="multipart/form-data">
      <div className="form-group">
                          <input onChange={e=>fileChange(e)}  type="file"  className="form-control"  id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                          </div> 
                      </form>
   
  <div className="form-group">
      <label >Cantidad:</label>
      <input type="text" id="cantidad" value={cantidad} className="form-control"  placeholder="Ingrese la cantidad" name="cantidad" onChange={e=>validarNumerosDos(e.target)} required/>
      
    </div>
    <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={()=>agregar()}>Submit</button>
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

export default AgregarProducto;