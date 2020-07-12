/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.dominio;

/**
 *
 * @author usuario
 */
public class Producto {
    private int codigo;
    private String descripcion;
    private double precio;
    private boolean grabado;
    private String imagen;
    private int cantidad;

    public Producto() {
    }

    public Producto(int codigo, String descripcion, double precio, boolean grabado, String imagen, int cantidad) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.grabado = grabado;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public boolean isGrabado() {
        return grabado;
    }

    public void setGrabado(boolean grabado) {
        this.grabado = grabado;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "{" + "codigo:" + codigo + ",descripcion:" + descripcion + ",precio:" + precio + ",grabado:" + grabado + ",imagen:" + imagen + ",cantidad:" + cantidad + '}';
    }
    
}
