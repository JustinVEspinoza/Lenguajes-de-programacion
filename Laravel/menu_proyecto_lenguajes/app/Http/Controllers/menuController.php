<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SoapClient;

class menuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $opts = array(
            'ssl' => array('ciphers'=>'RC4-SHA', 'verify_peer'=>false, 'verify_peer_name'=>false)
        );
        $params = array ('encoding' => 'UTF-8', 'verifypeer' => false, 'verifyhost' => false, 'soap_version' => SOAP_1_1, 'trace' => 1, 'exceptions' => 1, "connection_timeout" => 180, 'stream_context' => stream_context_create($opts) );
        try{
            $client = new SoapClient("http://localhost:8080/Restaurante/MenuService?WSDL",$params);
            return view('menu.index', ['lista'=>$client->getmenus()]);
        }
        catch(SoapFault $fault) {
            echo '<br>'.$fault;
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('menu.create');
    }

  
    public function store(Request $request)
    {
        $codigoPlatillo=0;
           $nombre=$request->input('txtNombre');
           $descripcionPlatillo=$request->input('txtDescripcion');
           $precio=(int)$request->input('txtPrecio');
           $descuento=(int)$request->input('txtDescuento');
           $racion=(int)$request->input('txtRacion');
           $calorias=$request->input('txtCalorias');
           $imageurl="l";//$request->input('txtImageURL');

          
           $menu=array("calorias"=>$calorias,"codigoPlatillo"=>$codigoPlatillo,"descripcionPlatillo"=>$descripcionPlatillo,"descuento"=>$descuento,"imageurl"=>$imageurl,"nombrePlatillo"=>$nombre,"precio"=>$precio,"racion"=>$racion);
		 $opts = array(
            'ssl' => array('ciphers'=>'RC4-SHA', 'verify_peer'=>false, 'verify_peer_name'=>false)
        );
        $params = array ('encoding' => 'UTF-8', 'verifypeer' => false, 'verifyhost' => false, 'soap_version' => SOAP_1_1, 'trace' => 1, 'exceptions' => 1, "connection_timeout" => 180, 'stream_context' => stream_context_create($opts) );
        try{
            $client = new SoapClient("http://localhost:8080/Restaurante/MenuService?WSDL",$params);
           //$modifyMenu->getmenus()
          $result=$client->insertarMenu(["menu"=>$menu]);
			var_dump($result);
            
        }
        catch(SoapFault $fault) {
            echo '<br>'.$fault;
        }


 		 return redirect('menu')->with('success','Registry has been deleted');
 		 
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $opts = array(
            'ssl' => array('ciphers'=>'RC4-SHA', 'verify_peer'=>false, 'verify_peer_name'=>false)
        );
        $params = array ('encoding' => 'UTF-8', 'verifypeer' => false, 'verifyhost' => false, 'soap_version' => SOAP_1_1, 'trace' => 1, 'exceptions' => 1, "connection_timeout" => 180, 'stream_context' => stream_context_create($opts) );
        try{
            $client = new SoapClient("http://localhost:8080/Restaurante/MenuService?WSDL",$params);
            return view('menu.modify', ['Menu'=>$client->ParametrosModificarMenu(['parameter' =>$id])]);
        }
        catch(SoapFault $fault) {
            echo '<br>'.$fault;
        }
    }
 
     
    public function update(Request $request, $id)
    {
    	//var_dump($request);
    	   $codigoPlatillo=$request->input('txtCodigo');
           $nombre=$request->input('txtNombre');
           $descripcionPlatillo=$request->input('txtDescripcion');
           $precio=$request->input('txtPrecio');
           $descuento=$request->input('txtDescuento');
           $racion=$request->input('txtRacion');
           $calorias=$request->input('txtCalorias');
           $imageurl=$request->input('txtImageURL');
           
           $menu=array("codigoPlatillo"=>$codigoPlatillo,"descripcionPlatillo"=>$descripcionPlatillo,"calorias"=>$calorias,"precio"=>$precio,"descuento"=>$descuento,"nombrePlatillo"=>$nombre,"racion"=>$racion,"imageurl"=>$imageurl);
		 $opts = array(
            'ssl' => array('ciphers'=>'RC4-SHA', 'verify_peer'=>false, 'verify_peer_name'=>false)
        );
        $params = array ('encoding' => 'UTF-8', 'verifypeer' => false, 'verifyhost' => false, 'soap_version' => SOAP_1_1, 'trace' => 1, 'exceptions' => 1, "connection_timeout" => 180, 'stream_context' => stream_context_create($opts) );
        try{
            $client = new SoapClient("http://localhost:8080/Restaurante/MenuService?WSDL",$params);
           //$modifyMenu->getmenus()
            $client->modifyMenu(["menu"=>$menu]);
            
            
        }
        catch(SoapFault $fault) {
            echo '<br>'.$fault;
        }


 		 return redirect('menu')->with('success','Registry has been deleted');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $opts = array(
            'ssl' => array('ciphers'=>'RC4-SHA', 'verify_peer'=>false, 'verify_peer_name'=>false)
        );
        $params = array ('encoding' => 'UTF-8', 'verifypeer' => false, 'verifyhost' => false, 'soap_version' => SOAP_1_1, 'trace' => 1, 'exceptions' => 1, "connection_timeout" => 180, 'stream_context' => stream_context_create($opts) );
        try{
            $client = new SoapClient("http://localhost:8080/Restaurante/MenuService?WSDL",$params);
           //$modifyMenu->getmenus()
            $client->deleteMenu(["codigoPlatillo"=>$id]);
            
            
        }
        catch(SoapFault $fault) {
            echo '<br>'.$fault;
        }
 	return redirect('menu')->with('success','Registry has been deleted');
      
    }
}
