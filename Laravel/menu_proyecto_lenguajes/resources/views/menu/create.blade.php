@extends('layouts.app')
@section('content')
<div class="container">
            <div class="registro">
                <p id="titulo">Agregar Platillo</p>
                <form action="/menu" method="post">
					  @csrf
					
                    <input type="text" class="form-control" value="" name="txtNombre" onkeypress="return validarPalabras(event);" placeholder="Nombre"/>
                    <textarea name="txtDescripcion" class="form-control text-area" onkeypress="return validarPalabras(event);" placeholder="descripción"></textarea>
                    <input type="text" name="txtDescuento" class="form-control" value="" onkeypress="return validarNumeros(event);" placeholder="descuento"/>
                    <input type="text" name="txtPrecio" class="form-control" value="" onkeypress="return validarNumeros(event);" placeholder="precio"/>
                    <input type="text" name="txtRacion" class="form-control" value="" onkeypress="return validarNumeros(event);" placeholder="ración"/>
                    <input type="text" name="txtCalorias" class="form-control" value="" onkeypress="return validarNumeros(event);" placeholder="calorias"/>
                    <div class="container">
                    	 
                    	 <input type="hidden" name="txtImageURL" value="http://localhost:8080/images/platillos" />
                        <button type="submit" value="Modificar" class="btn btn-primary" >Agregar</button>
                       
                    </div>

                </form>

            </div>
        </div>