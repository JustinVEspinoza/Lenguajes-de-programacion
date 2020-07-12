/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.dominio;

import java.sql.Time;
import java.util.Date;



/**
 *
 * @author usuario
 */
public class Guia {
    private String numero_guia;
    private Date fecha;
    private Time hora;
    private String nombre_despachador;

    public Guia() {
    }

    public Guia(String numero_guia, Date fecha, Time hora, String nombre_despachador) {
        this.numero_guia = numero_guia;
        this.fecha = fecha;
        this.hora = hora;
        this.nombre_despachador = nombre_despachador;
    }

    
    public String getNumero_guia() {
        return numero_guia;
    }

    public void setNumero_guia(String numero_guia) {
        this.numero_guia = numero_guia;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    public String getNombre_despachador() {
        return nombre_despachador;
    }

    public void setNombre_despachador(String nombre_despachador) {
        this.nombre_despachador = nombre_despachador;
    }

    @Override
    public String toString() {
        return "{" + "numero_guia:" + numero_guia + ",fecha:" + fecha + ",hora:" + hora + ",nombre_despachador:" + nombre_despachador + '}';
    }
    
}
