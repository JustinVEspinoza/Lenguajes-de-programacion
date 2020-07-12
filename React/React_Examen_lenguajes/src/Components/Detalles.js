import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Detalles(){
	const[width]=useState("55px");
	const[height]=useState("55px");
	const [productos, setProductos] = useState([]);
	const url=window.location.pathname;
	const urlParameters=url.split("/");  
	const urlcodigo=urlParameters[urlParameters.length-1];
	const [urlSerivce]=useState("http://localhost:4000/Examen/Guia/DespachoGuia/"+urlcodigo);
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
		return items;
	}
	useEffect(() => {
		(async () => {        
			const l = await axios.get(
				urlSerivce
				);
			setProductos(l.data);
		})();
	}, []);
	const items=getRows();
	return(
		<div>

		<div className="container" >
		<div className="row">
		<div className="col-sm-12 justify-content-center">
		<div className="card">
		<div className="card-body d-flex justify-content-between align-items-center">
		Lista de Guias de Despacho
		<a href="/Examen/agregar_producto" className="btn btn-primary btn-sm">Crear</a>
		</div>
		</div>
		<table className="table table-hover">
		<thead>
		<tr>
		<th>Codigo</th>
		<th>Descripcion</th>
		<th>Precio</th>
		<th>Grabado</th>
		<th>Imagen</th>
		<th>Cantidad</th>
		
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
export default Detalles;