@extends('layouts.app')

@section('content')

         <div class="container">
            <div class="col-md-10">
                <div class="search">
                    <form class="formL">
                        <label class="letter-12">Platillos:</label>
                        <input class="form-control form-search" placeholder="Buscar" type="text" id="txtbuscar" onkeyup="searchbyFilters()">            
                    </form>  

                    <form class="formR">
                        <a href="{{action('menuController@create')}}" class="btn btn-add">Agregar</a>
                    </form>
                </div>

                <div id="table" class="table-center">
                   <table>
					    <tr>
					        <th>Platillo</th>
					        <th>Precio</th>
					        <th>Descuento</th>
					        <th>Ración</th>
					        <th>Acciones</th>   
					    </tr>

					 

						@foreach($lista as $lc)       
         					@foreach($lc as $Menu)


             
              
						        <tr>
						            <td>{{$Menu->nombrePlatillo}}</td>
						            <td>{{$Menu->precio}}</td>
						            <td>{{$Menu->descuento}}</td>
						            <td>{{$Menu->racion}}</td>
						            <td class="last-col"> 
						                <a class="btn btn-edit"href="{{action('menuController@edit', $Menu->codigoPlatillo)}}">Editar</a>
						                <form onsubmit="return confirm('Do you really want to delete?');" action="{{action('menuController@destroy', $Menu->codigoPlatillo)}}" method="post">
										 {{csrf_field()}}
										 <input name="_method" type="hidden" value="DELETE">
										 <button class="btn btn-delete a" type="submit">Delete</button>
										 </form>
						                
						            </td>
						        </tr>
							@endforeach         
      					@endforeach
					    



					</table>
                </div>
            </div>
        </div>
             
          