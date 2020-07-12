var existRegister=0;
var pagesCargadas=new Array();
var rowsShow=0;
var rowsTotal=0;
var numPages=0;
function viewData(startItem,endItem){
     
    $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
   css('display','grid').animate({opacity:1}, 300);
}

function load(currPage){
    $('#nav a').removeClass('active');
    $(this).addClass('active');
    var currPage = currPage;
    var startItem = currPage * rowsShown;
    var endItem = startItem + rowsShown;
        if(pagesCargadas.length!=0){
            //cargar
            
            for(var i=0;i<pagesCargadas.length;i++){
                //alert(pagesCargadas[i]+" "+currPage)
                if(pagesCargadas[i]==currPage){//Valida si la pagina ya ha sido cargada
                    
                    existRegister=1;
                    i=pagesCargadas.length;
                }
            }
            if(existRegister==1){
                //Condicion que verifica si los registros ya estan cargados, si lo estan, 
                //Simplemente los muestra, en caso contrario, los carga de la bd y los muestra
                //alert("registros ya cargados");
                viewData(startItem,endItem);
                existRegister=0;
            }else{
                //Cargar Registros por primera vez en la paginacion respectiva
                //alert("No se han cargado");
                pagesCargadas.push($(this).attr('rel'));
                viewData(startItem,endItem);
            }


        }else{
            //Cargar segunda cant de registros
            //Simplemente para mostrar la primera carga de bd
            if(currPage!=0){
                //alert("Primeros registros");
               // $('#data').append("<tr><td>17</td><td>cell2_2</td><td>cell3_2</td><td>cell4_2</td></tr>");
                pagesCargadas.push(0);
                pagesCargadas.push($(this).attr('rel'));

                viewData(startItem,endItem);
            }
            
        }
}

/*Metodo encargado de la creacion de la paginacion, para produccion se necesita  modificar la consulta a base de datos*/
$(document).ready(function(){
    $('#data').after('<div id="nav" class="links container"></div>');
     rowsShown = 2;
     if(screen.width<700){
         rowsShown=1;
     }
     rowsTotal = $('#data tbody tr').length;//Consulta a base de datos sobre cantidad de registros
     numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a  rel="'+i+'" onclick="load('+i+')">'+pageNum+'</a> ');
    }
    $('#data tbody tr').hide();
    $('#data tbody tr').slice(0, rowsShown).show();//Primero cargo los primeros registros de bd
    $('#nav a:first').addClass('active');

    /*$('#nav a').bind('click', function(){
    });*/
});