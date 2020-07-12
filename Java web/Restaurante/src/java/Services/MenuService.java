/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Services;

import controlador.TbMenuCont;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import model.dao.Tb_menuDao;
import model.entidad.TbMenu;

/**
 *
 * @author usuario
 */
@WebService(serviceName = "MenuService")
public class MenuService {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
    
    @WebMethod(operationName = "getmenus")
    public List<TbMenu> getmenus() {
         Tb_menuDao dtMenu=new Tb_menuDao();
         List<TbMenu> lista=dtMenu.getMenus(); 
      
        
        return lista;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "insertarMenu")

    public boolean insertarMenu(@WebParam(name = "menu") TbMenu menu) {
        System.out.println(menu.toString());
        Tb_menuDao dtMenu = new Tb_menuDao();
        dtMenu.agregar(menu);
        return true;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "deleteMenu")
    public boolean deleteMenu(@WebParam(name = "codigoPlatillo") int codigoPlatillo) {
        Tb_menuDao dtMenu=new Tb_menuDao();
        System.out.println(codigoPlatillo);
       TbMenu m=dtMenu.getMenuByCodigo(codigoPlatillo);
     
        dtMenu.eliminar(m);
        return true;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "modifyMenu")
    public boolean modifyMenu(@WebParam(name = "menu") TbMenu menu) {
        System.out.println(menu.getCodigoPlatillo()+" "+menu.toString());
        Tb_menuDao dtMenu=new Tb_menuDao();
       
         dtMenu.modificar(menu);
        return true;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "getMenuByClave")
    public List<TbMenu> getMenuByClave(@WebParam(name = "clave") String clave) {
        
        TbMenuCont dtMenu=new TbMenuCont();
       List<TbMenu> lista=null; 
       if(clave.matches("[0-9]+")){
           lista=dtMenu.getMenuByPrecioAndRacionAndCalorias(Integer.parseInt(clave));
       }else{
           lista=dtMenu.getListaTbMenusByClave(clave);
       }
       
        
        return lista;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "getMenuByPrecioCaloriasDescuento")
    public List<TbMenu> getMenuByPrecioCaloriasDescuento(@WebParam(name = "codigo") int codigo) {
       TbMenuCont dtMenu=new TbMenuCont();
       List<TbMenu> lista=null; 
       
            lista=dtMenu.getMenuByPrecioAndRacionAndCalorias(codigo);
        
        return lista;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "ParametrosModificarMenu")
    public TbMenu ParametrosModificarMenu(@WebParam(name = "parameter") int codigoPlatillo ) {
        Tb_menuDao dtMenu=new Tb_menuDao();
         TbMenu menu=new TbMenu();
        
             menu=dtMenu.getMenuByCodigo(codigoPlatillo);
      
        return menu;
    }
}
