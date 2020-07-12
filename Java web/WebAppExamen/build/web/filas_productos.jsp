<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<tr>
            <td>${p.getCodigo()}</td>
            <td>${p.getDescripcion()}</td>
            <td>${p.getPrecio()}</td>
            <td  width=”30″>${p.isGrabado()}</td>
            <td><img src="http://localhost:4000/Examen/Imagenes/${p.getImagen()}" style="width:55px;height:55px;"/></td>
            <td>${p.cantidad}</td>
            <td> <button  class="btn btn-danger" onClick="delete_producto(${p.getCodigo()} )">Eliminar</button></td>
</tr>