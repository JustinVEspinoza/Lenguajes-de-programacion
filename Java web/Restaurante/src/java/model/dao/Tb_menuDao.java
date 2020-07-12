/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import java.util.LinkedList;
import java.util.List;
import model.entidad.TbMenu;
import model.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author usuario
 */
public class Tb_menuDao {
    public List<TbMenu> getMenus(){
        List<TbMenu> menus=null;
        Session sesion = HibernateUtil.getSessionFactory().openSession();
        Transaction t = sesion.beginTransaction();
        String hql = "FROM TbMenu";
        try {
            menus = sesion.createQuery(hql).list();
            t.commit();
            sesion.close();
        } catch (Exception e) {
            t.rollback();
        }
        return menus;
    }
    public List<TbMenu> getMenuByClave(String clave){
        List<TbMenu> menus=null;
        Session sesion = HibernateUtil.getSessionFactory().openSession();
        Transaction t = sesion.beginTransaction();
        String hql = "FROM TbMenu where nombrePlatillo LIKE '"+clave+"%'";
        try {
            menus = sesion.createQuery(hql).list();
            t.commit();
            sesion.close();
        } catch (Exception e) {
            t.rollback();
        }
        return menus;
    }
    public TbMenu getMenuByCodigo(int clave){
       TbMenu menus=null;
       List<TbMenu> m=null;
        Session sesion = HibernateUtil.getSessionFactory().openSession();
        Transaction t = sesion.beginTransaction();
        String hql = "FROM TbMenu where codigoPlatillo="+clave+"";
        try {
            m = sesion.createQuery(hql).list();
    
            menus=m.get(0);

            t.commit();
            sesion.close();
        } catch (Exception e) {
            t.rollback();
        }
        return menus;
    }
    public List<TbMenu> getMenuByPrecioAndRacionAndCalorias(int clave){
        List<TbMenu> menus=null;
        Session sesion = HibernateUtil.getSessionFactory().openSession();
        Transaction t = sesion.beginTransaction();
        String hql = "FROM TbMenu where precio="+clave+" or racion="+clave+" or calorias="+clave;
        try {
            menus = sesion.createQuery(hql).list();
            t.commit();
            sesion.close();
        } catch (Exception e) {
            t.rollback();
        }
        return menus;
    }
     public void agregar(TbMenu menu) {
        Session sesion = null;
        try {
            sesion = HibernateUtil.getSessionFactory().openSession();
            sesion.beginTransaction();
            sesion.save(menu);
            sesion.getTransaction().commit();
        } catch (Exception e) {
            sesion.getTransaction().rollback();
        } finally {
            if (sesion != null) {
                sesion.close();
            }
        }
    }

    public void modificar(TbMenu menu) {
        Session sesion = null;
        try {
            sesion = HibernateUtil.getSessionFactory().openSession();
            sesion.beginTransaction();
            sesion.update(menu);
            sesion.getTransaction().commit();
        } catch (Exception e) {
            sesion.getTransaction().rollback();
        } finally {
            if (sesion != null) {
                sesion.close();
            }
        }
    }

    public void eliminar(TbMenu menu) {
        Session sesion = null;
        try {
            sesion = HibernateUtil.getSessionFactory().openSession();
            sesion.beginTransaction();
            sesion.delete(menu);
            sesion.getTransaction().commit();
        } catch (Exception e) {
            sesion.getTransaction().rollback();
        } finally {
            if (sesion != null) {
                sesion.close();
            }
        }
    }
}
