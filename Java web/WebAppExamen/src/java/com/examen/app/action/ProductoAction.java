/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.action;

import com.examen.app.datos.GuiaService;
import com.examen.app.datos.ProductoService;
import com.examen.app.dominio.Producto;
import java.io.PrintWriter;
import java.util.LinkedList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.actions.DispatchAction;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionForward;

/**
 *
 * @author usuario
 */
public class ProductoAction extends DispatchAction {

    /* forward name="success" path="" */
    private final static String SUCCESS = "LISTADO";

    /**
     * This is the Struts action method called on
     * http://.../actionPath?method=myAction1, where "method" is the value
     * specified in <action> element : ( <action parameter="method" .../> )
     */
    public ActionForward getListado(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        ProductoService ps=new ProductoService();
        LinkedList<Producto> lista=ps.getListado();
        request.setAttribute("lProducto", lista);
        return mapping.getInputForward();
    }
    public ActionForward delete(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        ProductoService ps=new ProductoService();
        ps.deleteById(Integer.parseInt(request.getParameter("codigo")));
        
     
        LinkedList<Producto> lista=ps.getListado();
        request.setAttribute("lProducto", lista);
        
        return mapping.findForward("tabla_menu");
    }
    public ActionForward getId(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        ProductoService ps=new ProductoService();
       int codigo=ps.getNewId();
     
        request.setAttribute("codigo", codigo);
        
        return mapping.findForward("agregar");
    }
    public ActionForward agregar(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        ProductoService ps=new ProductoService();
       int codigo=Integer.parseInt(request.getParameter("codigo"));
     String descripcion=request.getParameter("descripcion");
     String imagen=request.getParameter("imagen");
     int cantidad=Integer.parseInt(request.getParameter("cantidad"));
     double precio=Double.parseDouble(request.getParameter("precio"));
     String grabadoTemp=request.getParameter("grabado");
     boolean grabado=false;
     if(grabadoTemp.equals("1")){
         grabado=true;
     }
        
        Producto p=new Producto(codigo, descripcion, precio, grabado, imagen, cantidad);
        ps.createProducto(p);
        return null;
    }
     public ActionForward validarDelete(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
         int codigo=Integer.parseInt(request.getParameter("codigo"));
        GuiaService gs=new GuiaService();
       boolean validator= gs.getListadoDespacho(codigo);
       PrintWriter out=response.getWriter();
       out.print(validator);
        //request.setAttribute("lProducto", lista);
        return null;
    }
    /**
     * This is the Struts action method called on
     * http://.../actionPath?method=myAction2, where "method" is the value
     * specified in <action> element : ( <action parameter="method" .../> )
     */
    public ActionForward myAction2(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        
        return mapping.findForward(SUCCESS);
    }
}
