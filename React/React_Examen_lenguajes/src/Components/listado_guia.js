import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function ListadoGuia(){
		const [guia, setGuias] = useState([]);
	function getArreglarFechas(){
  	 for(var i=0;i<guia.length;i++){
  		var fecha=guia[i].fecha;
  		console.log(fecha);
  		var fechaTemp=fecha.split(":");
  		console.log(fechaTemp[0]);
  		var fechaTemporalDos=fechaTemp[0].split("T");
  		console.log(fechaTemporalDos[0]);
  		guia[i].fecha=fechaTemporalDos[0];
  	}
  }
	function getRows(){
		getArreglarFechas();
          const   items = guia.map((p, idx) => {
				    		var url="/Examen/Detalles/"+p.numero_guia;
				    		
				            return( <tr key={idx}>

				            	 <td>{p.numero_guia}</td>
	        <td>{p.fecha+" "+p.hora}</td>
	        <td>{p.nombre_despachador}</td>
	        <td>{p.cantidad}</td>
	        <td><a  className="btn btn-primary" href={url}>Detalles</a></td>
				             </tr>);
      					});
	 return items;
	}
	useEffect(() => {
		    (async () => {        
	 			const l = await axios.get(
		        "http://localhost:4000/Examen/Guia/"
		      );
		      setGuias(l.data);
	 		})();
		  }, []);
	const items=getRows();
	return(
		<div>

<div className="container">
<div className="row">
	<div className="col-sm-12 justify-content-center">
		<div className="card">
					<div className="card-body d-flex justify-content-between align-items-center">
						Lista de Guias de Despacho
						<a href="http://localhost:3000/Examen/agregar_guia" className="btn btn-primary btn-sm">Crear</a>
					</div>
				</div>
	<table className="table table-hover">
	    <thead>
	      <tr>
	        <th>Numero de Guia</th>
	        <th>Fecha</th>
	        <th>Nombre del despachador</th>
	        <th>Acciones</th>
	      </tr>
	    </thead>
	    <tbody>
	      {items}
	      
	    </tbody>
	  </table>
	</div>
	</div>
</div>
		</div>
	);
}
export default ListadoGuia;