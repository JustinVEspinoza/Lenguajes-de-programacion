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
         <script src="Guia.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <%@include  file="Menu.jsp" %>
        <div class="container" style="margin-top:5%; ">
<div class="row">
	<div class="col-sm-12 justify-content-center">
		
	<table class="table table-hover">
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
                <logic:iterate name="lProducto" id="p" scope="request">
	      <tr >
	        <td>${p.getCodigo()}</td>
	        <td>${p.getDescripcion()}</td>
	        <td>${p.getPrecio()}</td>
	        <td>${p.isGrabado()}</td>
			
	        
	        <td><img src="http://localhost:4000/Examen/Imagenes/${p.getImagen()}" style="width:55px;height:55px;"/></td>
	        <td>${p.getCantidad()}</td>
	        
	      </tr>
                </logic:iterate>
	    </tbody>
	  </table>
	</div>
	</div>
</div>
    </body>
</html>
