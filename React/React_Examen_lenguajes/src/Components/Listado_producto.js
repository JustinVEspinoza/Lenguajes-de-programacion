		import React,{useState,useEffect} from 'react';
		import axios from 'axios';
		import 'bootstrap/dist/css/bootstrap.css';
		import Swal from 'sweetalert2';
		function ListadoProducto() {
			const[width]=useState("55px");
			const[height]=useState("55px");
			const [productos, setProductos] = useState([]);

			function delete_platillo(id){
				
				axios.get('http://localhost:4000/Examen/Guia/Despacho/'+id)
				.then(res => {
					
					
					console.log(JSON.stringify(res["data"]).length);
					var num=JSON.stringify(res["data"]).length;
					console.log(num);
					if(num!=18){
		          // esta relacionadp
		          Swal.fire('Producto No  puede ser eliminado')
		          
		      }else{
		      	axios.delete('http://localhost:4000/Examen/Producto/'+id)
		      	.then(res => {
		      		axios.get('http://localhost:4000/Examen/Producto/')
		      		.then(res => {
		      			Swal.fire('Producto eliminado con exito')
		      			setProductos(res["data"]);
		      			
		      		}).catch((error) => {
		      			console.log(error);
		      		});
		      	}).catch((error) => {
		      		console.log(error);
		      	});
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
					<td><button  className="btn btn-danger" onClick={()=>delete_platillo(p.codigo )}>Eliminar</button></td>
					
					</tr>);
			});
			return items;
		}

		useEffect(() => {
			(async () => {        
				const l = await axios.get(
					"http://localhost:4000/Examen/Producto/"
					);
				setProductos(l.data);
			})();
		}, []);
		const items=getRows();
		if(items.length>0){
			return (
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
		return(<div>Error</div>);
	}

	export default ListadoProducto;