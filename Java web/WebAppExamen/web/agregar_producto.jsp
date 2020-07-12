
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
         <script src="Producto.js"></script>
         
        <title>JSP Page</title>
    </head>
    <body>
        <%@include file="./Menu.jsp" %>
        <div class="container-fluid h-100 bg-light text-dark">
            <div class="row justify-content-center align-items-center" >

                <div style="border:groove;">
                    <div class="">
                        <h2>Ingresar nuevo producto</h2>
                        <div class="form-group">
                            <label for="codigo">Codigo:</label>
                            <input id="codigo" class="form-control" placeholder="Codigo" name="codigo" value="${codigo}" disabled=""/>

                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripcion:</label>
                            <input id="descripcion" class="form-control" placeholder="Ingrese una descripcion" name="descripcion" onkeypress="return validarPalabras(event)" required />
                        </div>
                        <div class="form-group">
                            <label for="precio">Precio:</label>
                            <input id="precio" class="form-control"  placeholder="Ingrese el precio del producto" name="precio" onkeypress="return validarNumeros(event)" >
                        </div>

                        <div class="form-group">
                            <label for="check">Grabado:</label>
                            
                            <div class="form-check" style="margin-left: 5%;" >
                                 <input id="cb1" class="form-check-input" type="checkbox" name="remember" checked="checked" onclick="validarCheckbox(cb1)" required> 
                                <label>Si</label>
                                <br/>
                                <input id="cb2" class="form-check-input" type="checkbox" name="remember"  onclick="validarCheckbox(cb2)" required> 
                                <label>No</label>
                            </div>

                        </div>

                        <form action="/upload" method="post" enctype="multipart/form-data">
                            <div class="form-group">
                                <input onchange="fileChange(event)"  type="file"  class="form-control"  id="inputGroupFile01"  aria-describedby="inputGroupFileAddon01">
                            </div> 
                        </form>

                        <div class="form-group">
                            <label for="cantidad">Cantidad:</label>
                            <input id="cantidad" class="form-control"  placeholder="Ingrese la cantidad" name="cantidad" onkeypress="return validarNumerosDos(event)"required>

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
