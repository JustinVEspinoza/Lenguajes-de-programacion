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
		<div class="card">
					<div class="card-body d-flex justify-content-between align-items-center">
						Lista de Guias de Despacho
						<a href="./agregar_guia.jsp" class="btn btn-primary btn-sm">Crear</a>
					</div>
				</div>
                <%@include  file="tabla_guia.jsp" %>
	</div>
	</div>
    </div>
    </body>
</html>
