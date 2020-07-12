<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<table class="table table-hover">
	    <thead>
	      <tr>
	        <th>Numero de Guia</th>
	        <th>Fecha</th>
	        <th>Nombre del despachador</th>
	        <th>Acciones</th>
	      </tr>
	    </thead>
	    <tbody>
                  <logic:iterate name="lGuia" id="p" scope="request">
	      <tr >
	        <td>${p.getNumero_guia()}</td>
	        <td>${p.getFecha()} ${p.getHora()}</td>
	        <td>${p.getNombre_despachador()}</td>

                <td><a  class="btn btn-primary" href="./guia.do?method=listar&numero=${p.getNumero_guia()}">Detalles</a></td>
	      </tr>
        </logic:iterate>
	    </tbody>
	  </table>