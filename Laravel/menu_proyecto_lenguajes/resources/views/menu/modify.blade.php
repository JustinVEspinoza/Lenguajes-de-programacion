@extends('layouts.app')

@section('content')
@foreach($Menu as $menu) 
<div class="container">
            <div class="registro">
                <p id="titulo">Modificar Platillo</p>
                <form method="post" action="{{route('menu.update', $menu->codigoPlatillo)}}" id="formMenu">
					 @method('PATCH')
               		 @csrf
					
                    <input type="text" class="form-control" value="{{$menu->nombrePlatillo}}" name="txtNombre" onkeypress="return validarPalabras(event);"  placeholder="Nombre"/>
                    <textarea name="txtDescripcion" class="form-control text-area" onkeypress="return validarPalabras(event);" placeholder="descripción">{{$menu->descripcionPlatillo}}</textarea>
                    <input type="text" name="txtDescuento" class="form-control" value="{{$menu->descuento}}" onkeypress="return validarNumeros(event);" placeholder="descuento"/>
                    <input type="text" name="txtPrecio" class="form-control" value="{{$menu->precio}}" onkeypress="return validarNumeros(event);" placeholder="precio"/>
                    <input type="text" name="txtRacion" class="form-control" value="{{$menu->racion}}" onkeypress="return validarNumeros(event);" placeholder="ración"/>
                    <input type="text" name="txtCalorias" class="form-control" value="{{$menu->calorias}}" onkeypress="return validarNumeros(event);" placeholder="calorias"/>
                    <div class="container">
                    	 <input type="hidden" name="txtCodigo" value="{{$menu->codigoPlatillo}}" />
                    	 <input type="hidden" name="txtImageURL" value="{{$menu->imageurl}}" />
                        <button type="submit" value="Modificar" class="btn btn-primary" >Modificar</button>
                       
                    </div>

                </form>

            </div>
        </div>
@endforeach