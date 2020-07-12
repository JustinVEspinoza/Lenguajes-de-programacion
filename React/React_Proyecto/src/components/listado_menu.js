import React from 'react';
import axios from 'axios';





class Listado extends React.Component{
	constructor(props){
        super(props)
        
        this.state={
            opcion:"getMenus",
			menus:[],
			menu:[],
			nombrePlatillo:"",
			descripcionPlatillo:"",
			descuento:0,
			precio:0,
			racion:0,
			calorias:"",
			clave:""
        }
        this.getMenus();
    }

    getMenus = () => {
		this.state.opcion="getMenus";

      
        axios.get('http://localhost:4000/api/Menu')
                .then(res => {
                    this.setState({
                       
                    menus: res.data["return"],
                   
                    });
                    
					console.log(res);
                   
                })
                .catch((error) => {
                    console.log(error);
				});
				
        if(this.state.menus.length===0){
            console.log("No recupero nada");
        }else{
            console.log(this.state.menus);
        }

    };
	filtro_platillo = (value) => {
		this.state.opcion="getMenus";
		console.log(value+" filtrooooo");
      if(value.length===0){
		  this.getMenus();
		  this.state.clave="";
	  }else{
		this.state.clave=value;
	  
	  console.log(this.state.clave+" filtroooooooooo2");
        axios.get('http://localhost:4000/api/Menu/Filtro/'+this.state.clave)
                .then(res => {
					console.log(res);
                    this.setState({
                       
                    menus: res.data["return"],
                   
                    });
                    console.log("Filtro");
				
                   
                })
                .catch((error) => {
                    console.log(error);
				});
				
        if(this.state.menus.length===0){
            console.log("No recupero nada");
        }else{
            console.log(this.state.menus);
        }
	  }
		

    };
    eliminar = (id) => {
       console.log("Eliminar "+id);
      
        axios.delete('http://localhost:4000/api/Menu/'+id)
                .then(res => {
                   this.getMenus();
                    
                   console.log(res);
                   
                })
                .catch((error) => {
                    console.log(error);
                });
	};
	update_platillo = () => {
		console.log("put ");
	    const menuObject = {
			codigoPlatillo:this.state.menu.codigoPlatillo,
			descripcionPlatillo:this.state.descripcionPlatillo,
			calorias:this.state.calorias,
			precio:this.state.precio,
			descuento:this.state.descuento,
			nombrePlatillo:this.state.nombrePlatillo,
			racion:this.state.racion,
			imageurl:this.state.imageurl
			
		  };
		 axios.put('http://localhost:4000/api/Menu/'+this.state.menu.codigoPlatillo,menuObject)
				 .then(res => {
					this.getMenus();
					 
					console.log(res);
					
				 })
				 .catch((error) => {
					 console.log(error);
				 });
				 console.log(this.state.nombrePlatillo+" "+this.state.descripcionPlatillo);
	 };
	 agregar_platillo = () => {
		console.log("agregar ");
	    const menuObject = {
			calorias:this.state.calorias,
			codigoPlatillo:0,
			descripcionPlatillo:this.state.descripcionPlatillo,
			descuento:this.state.descuento,
			imageurl:"http://localhost:8080/Restaurante/images/platillos",
			nombrePlatillo:this.state.nombrePlatillo,
			precio:this.state.precio,
			racion:this.state.racion
			
			
		  };
		  console.log(menuObject);
		 axios.post('http://localhost:4000/api/Menu/',menuObject)
				 .then(res => {
					this.getMenus();
					
				 })
				 .catch((error) => {
					 console.log(error);
				 });
				 console.log(this.state.nombrePlatillo+" "+this.state.descripcionPlatillo);
	 };
    modificar = (id) => {
		axios.get('http://localhost:4000/api/Menu/'+id)
		.then(res => {
		   this.setState({
			opcion:"modificar",
			menu:res.data["return"]
		 });
		   this.setState(
			   {
				   nombrePlatillo:this.state.menu.nombrePlatillo,
				   descripcionPlatillo:this.state.menu.descripcionPlatillo,
				   descuento:this.state.menu.descuento,
					precio:this.state.menu.precio,
					racion:this.state.menu.racion,
					calorias:this.state.menu.calorias
			   }
		   )
		   
		})
		.catch((error) => {
			console.log(error);
		});
      
	 };
	 agregar = (id) => {
		
		
		   this.setState(
			   {
				   nombrePlatillo:"",
				   descripcionPlatillo:"",
				   descuento:0,
					precio:0,
					racion:0,
					calorias:"",
					opcion:"agregar"
			   }
		   )
		   
		
		
      
	 };
	 
	 onChangeMenuName= (value) => {
		this.setState({
			nombrePlatillo:value
		});
		
	  }
	  
	  onChangeMenuDescripcion= (value) => {
	   this.setState({
		   descripcionPlatillo:value
	   });
	 }
	 onChangeMenuDescuento= (value) => {
	   this.setState({
		   descuento:value
	   });
	 }
	 onChangeMenuPrecio= (value) => {
	   this.setState({
		   precio:value
	   });
	 }
	 onChangeMenuRacion= (value) => {
	   this.setState({
		   racion:value
	   });
	 }
	 onChangeMenuCalorias= (value) => {
	   this.setState({
		   calorias:value
	   });
	 }
	render(){
		console.log(this.state.opcion);
		if(this.state.opcion==="getMenus"){
			console.log("Entro a obtener los menus");
			console.log(this.state.menus);
			console.log("********");
			const items = this.state.menus.map((word, idx) => {
            return <tr key={idx}>
                <td >{word.codigoPlatillo}</td>
                <td >{word.nombrePlatillo}</td>
                <td >{word.descripcionPlatillo}</td>
                <td >{word.descuento}</td>
                <td >{word.precio}</td>
                <td >{word.racion}</td>
                <td >{word.calorias}</td>
               <td> <a className="btn btn-edit" onClick={()=>this.modificar(word.codigoPlatillo)}>Editar</a>
                    <a className="btn btn-delete"  onClick={()=>this.eliminar(word.codigoPlatillo)}>Eliminar</a></td>
                </tr>;
			});
			return(

				<div className="container">
					<div className="col-md-10">
						<div className="search">
							<div className="formL">
								<label className="letter-12">Platillos:</label>
								<input type="text" name="clave" value={this.state.clave} className="form-control form-search" placeholder="Buscar" onChange={e=>this.filtro_platillo(e.target.value)} />            
							</div>  
	
							<div className="formR">
								<a onClick={()=>this.agregar()}className="btn btn-add">Agregar</a>
							</div>
						</div>
	
						<div id="table" className="table-center">
							<table>
								<thead>
									<tr>
										<th>Código</th>
										<th>Nombre</th>
										<th>Descripción</th>
										<th>Descuento</th>
										<th>Precio</th>
										<th>ración</th>
										<th>calorias</th>
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
			);
		}else{
			if(this.state.opcion==="modificar"){
				console.log("Modificar");
				console.log(this.state.nombrePlatillo);
				return(
					
					
					<div className="container">
						<div className="col-md-10">
							<a className="btn" onClick={()=>this.getMenus()}>Listado</a>
							<div className="container">
								<div className="registro">
									<p id="titulo">Modificar Platillo</p>
									<div>

										<input type="text" className="form-control" value={this.state.nombrePlatillo} id="txtNombre" onChange={e => this.onChangeMenuName(e.target.value)} />
										<input type="text" id="txtDescripcion" className="form-control text-area" value={this.state.descripcionPlatillo} onChange={e => this.onChangeMenuDescripcion(e.target.value)} />
										<input type="text" id="txtDescuento" className="form-control" value={this.state.descuento} onChange={e => this.onChangeMenuDescuento(e.target.value)}/>
										<input type="text" id="txtPrecio" className="form-control" value={this.state.precio} onChange={e => this.onChangeMenuPrecio(e.target.value)}/>
										<input type="text" id="txtRacion" className="form-control" value={this.state.racion} onChange={e => this.onChangeMenuRacion(e.target.value)}/>
										<input type="text" id="txtCalorias" className="form-control" value={this.state.calorias} onChange={e => this.onChangeMenuCalorias(e.target.value)}/>
										<div className="container">
											<input type="button" value="Modificar" className="btn btn-primary" onClick={()=>this.update_platillo()}/>
											<input type="hidden" id="txtCodigo" value={this.state.menu.codigoPlatillo} />
										</div>

									</div>

								</div>
        					</div>
						</div>
					</div>
				);
				console.log("Modificar");
			}else{
				if(this.state.opcion==="agregar"){
					return(
					
					
						<div className="container">
							<div className="col-md-10">
								<a className="btn" onClick={()=>this.getMenus()}>Listado</a>
								<div className="container">
									<div className="registro">
										<p id="titulo">Agregar Platillo</p>
										<div>
	
											<input type="text" className="form-control" value={this.state.nombrePlatillo} id="txtNombre" onChange={e => this.onChangeMenuName(e.target.value)} />
											<input type="text" id="txtDescripcion" className="form-control text-area" value={this.state.descripcionPlatillo} onChange={e => this.onChangeMenuDescripcion(e.target.value)} />
											<input type="text" id="txtDescuento" className="form-control" value={this.state.descuento} onChange={e => this.onChangeMenuDescuento(e.target.value)}/>
											<input type="text" id="txtPrecio" className="form-control" value={this.state.precio} onChange={e => this.onChangeMenuPrecio(e.target.value)}/>
											<input type="text" id="txtRacion" className="form-control" value={this.state.racion} onChange={e => this.onChangeMenuRacion(e.target.value)}/>
											<input type="text" id="txtCalorias" className="form-control" value={this.state.calorias} onChange={e => this.onChangeMenuCalorias(e.target.value)}/>
											<div className="container">
												<input type="button" value="Agregar" className="btn btn-primary" onClick={()=>this.agregar_platillo()}/>
												<input type="hidden" id="txtCodigo" value={this.state.menu.codigoPlatillo} />
											</div>
	
										</div>
	
									</div>
								</div>
							</div>
						</div>
					);
				}else{

				}
			}
			
		}
		
	
	}
}

export default Listado;