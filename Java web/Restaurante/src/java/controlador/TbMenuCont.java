/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import model.dao.Tb_menuDao;
import model.entidad.TbMenu;

/**
 *
 * @author usuario
 */
@ManagedBean
@RequestScoped
public class TbMenuCont {

    /**
     * Creates a new instance of TbMenuCont
     */
   
    private List<TbMenu> listaTbMenus;
    private TbMenu menu;

    public TbMenu getMenu() {
        return menu;
    }
    
     public TbMenuCont() {
         menu=new TbMenu();
    }
    public List<TbMenu> getListaTbMenus(){
        Tb_menuDao add=new Tb_menuDao();
        listaTbMenus=add.getMenus();
        return listaTbMenus;
        
    }
     public List<TbMenu> getListaTbMenusByClave(String clave){
        Tb_menuDao add=new Tb_menuDao();
        listaTbMenus=add.getMenuByClave(clave);
        return listaTbMenus;
        
    }
      public List<TbMenu> getMenuByPrecioAndRacionAndCalorias(int clave){
        Tb_menuDao add=new Tb_menuDao();
        this.listaTbMenus=add.getMenuByPrecioAndRacionAndCalorias(clave);
        return listaTbMenus;
        
    }
       public TbMenu getMenuByCodigo(int clave){
        Tb_menuDao add=new Tb_menuDao();
       
        this.menu=add.getMenuByCodigo(clave);
        
        
        return this.menu;
    }
    public void setListaTbMenus(List<TbMenu> listaTbMenus) {
        this.listaTbMenus = listaTbMenus;
    }
    public TbMenu getTbMedicos() {
        return menu;
    }

    public void setMenu(TbMenu menu) {
        this.menu = menu;
    }
    
    public void limpiarTbMenu() {
        this.menu = new TbMenu();
    }
    public void agregarTbMenu(){
        Tb_menuDao add=new Tb_menuDao();
        add.agregar(menu);
    }
    public void modificarTbMedicos(){
        Tb_menuDao add=new Tb_menuDao();
        add.modificar(menu);
        limpiarTbMenu();
    }
    public void eliminarTbMedicos(){
        Tb_menuDao add=new Tb_menuDao();
        add.eliminar(menu);
        limpiarTbMenu();
    }
    
    
}
