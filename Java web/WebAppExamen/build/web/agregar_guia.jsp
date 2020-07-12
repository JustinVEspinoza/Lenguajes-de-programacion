<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
         <script src="sweetalert2.all.min.js"></script> 
        <script src="Guia.js"></script>
        
        <title>JSP Page</title>
    </head>
    <body>
        <%@include  file="Menu.jsp" %>
        <div class="container-fluid h-100 bg-light text-dark">
  <div class="row justify-content-center align-items-center" >
  
  <div style="border:groove;">
  <div class="">
	 <h2>Ingresar nueva Guia</h2>
    <div class="form-group">
      <label for="numero_guia">Numero Guia:</label>
      <input id="numero_guia" class="form-control" placeholder="Numero de guia" name="numero_guia" onkeypress="mascaraNumeroGuia(event)" />
      
    </div>
    <div class="form-group">
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" class="form-control" placeholder="Fecha" name="fecha"/>
      
    </div>
    <div class="form-group">
      <label for="Hora">hora:</label>
      <input id="hora" onkeypress="mascaraHora(event)" class="form-control" placeholder="Hora" name="hora" />
      
    </div>
		<div class="form-group">
      <label for="nombre_despachador">Nombre despachador:</label>
      <input id="nombre_despachador" class="form-control" placeholder="nombre de despachador" name="nombre_despachador" onkeypress="validarPalabras(event)"/>
      
    </div>
    <div class="form-inline">
      <label for="codigo">Producto:</label>
      <input id="codigo" class="form-control" style="width:75%;" placeholder="Codigo de producto agregar" name="codigo" />
      <button type="submit" class="btn btn-primary btn-sm" onclick="cargar()">Asociar</button>
      <div class="container" style="margin-top:5%; ">
<div class="row">
	<div class="col-sm-12 justify-content-center">
		
	<table class="table table-hover">
	    <thead>
	      <tr>
	        <th>Codigo</th>
	        <th>Descripcion</th>
	        <th>Precio</th>
	        <th>Imagen</th>
	        <th>Cantidad</th>
	      </tr>
	    </thead>
	    <tbody id="contenedor">
	      
	      
	    </tbody>
	  </table>
	</div>
	</div>
</div>
    </div>
		<div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary" onclick="agregar()">Submit</button>
      </div>
  	 </div>
  	</div>
 <div style="height:300px;">
   </div>
</div>

</div>
    </body>
</html>
