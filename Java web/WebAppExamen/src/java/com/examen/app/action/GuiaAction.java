/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.action;

import com.examen.app.datos.GuiaService;
import com.examen.app.datos.ProductoService;
import com.examen.app.dominio.Guia;
import com.examen.app.dominio.Producto;
import java.io.PrintWriter;
import java.util.LinkedList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Time;
import org.apache.struts.actions.DispatchAction;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionForward;

/**
 *
 * @author usuario
 */
public class GuiaAction extends DispatchAction {

    /* forward name="success" path="" */
    private final static String SUCCESS = "success";

    public ActionForward getListado(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        GuiaService ps=new GuiaService();
        LinkedList<Guia> lista=ps.getListado();
        request.setAttribute("lGuia", lista);
        return mapping.getInputForward();
    }
    
   public ActionForward validarGuia(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
       GuiaService ps=new GuiaService();
        
        String numero_guia=request.getParameter("numero");
        boolean validator=ps.getGuiById(numero_guia);
        PrintWriter out=response.getWriter();
        out.print(validator);
    return null;   
   }
    public ActionForward insertarGuia(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        GuiaService ps=new GuiaService();
        
        String numero_guia=request.getParameter("numero");
        String fechaTemp=request.getParameter("fecha");
        String horaTemp=request.getParameter("hora");
        String nombre=request.getParameter("nombre");        
        DateFormat fecha = new SimpleDateFormat("yyyy-MM-dd");
         Date fecha_apertura = null; 
         Time hora=null;
                    
                   try {
                       fecha_apertura = fecha.parse(fechaTemp);
                        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss"); // 12 hour format

                        Date d1 =(java.util.Date)format.parse(horaTemp);
                        hora=new java.sql.Time(d1.getTime());
                   } catch (ParseException ex) {
                      System.out.println("No cumple el formato");
                   }
        ps.createGuia(new Guia(numero_guia, fecha_apertura, hora, nombre));
        return null;
    }
    public ActionForward insertarDespacho(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        GuiaService ps=new GuiaService();
        int codigo=Integer.parseInt(request.getParameter("codigo"));
        String numero_guia=request.getParameter("numero");
         int cantidad=Integer.parseInt(request.getParameter("cantidad"));
        ps.createDespacho(codigo, numero_guia, cantidad);
        
        return null;
    }
    public ActionForward listar(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        String numero=request.getParameter("numero");
        GuiaService ps=new GuiaService();
        LinkedList<Producto> lista=ps.getListadoById(numero);
        request.setAttribute("lProducto", lista);
        return mapping.findForward("detalles");
    }
  public ActionForward add(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        int numero=Integer.parseInt(request.getParameter("codigo"));
        ProductoService ps=new ProductoService();
        Producto lista=ps.getProductoById(numero);
        PrintWriter out=response.getWriter();
        if(lista!=null){
         out.print(lista.toString());
        }else{
            out.print("error");
        }
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
