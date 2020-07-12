/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.datos;

import com.examen.app.dominio.Guia;
import com.examen.app.dominio.Producto;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.Map;

/**
 *
 * @author usuario
 */
public class GuiaService {
     /* public static void main(String args[]){
       //GuiaService.getListado();
       //GuiaService.getListadoById("BBB-119");
       
                 DateFormat fecha = new SimpleDateFormat("yyyy-MM-dd");
                    Date fecha_apertura = null; 
                    Time hora=null;
                    
                   try {
                       fecha_apertura = fecha.parse("2020-09-11");
                        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss"); // 12 hour format

                        Date d1 =(java.util.Date)format.parse("10:10:10");
                        hora=new java.sql.Time(d1.getTime());
                   } catch (ParseException ex) {
                      System.out.println("No cumple el formato");
                   }
      // GuiaService.getListadoDespacho(8);
      // GuiaService.createGuia(new Guia("ABC-113",fecha_apertura,hora,"Justin"));
      GuiaService.createDespacho(3, "ABC-113", 4);
        
    }*/
    public  LinkedList<Guia> getListado() {
        LinkedList<Guia> p = new LinkedList<Guia>();
        try {

            URL url = new URL("http://localhost:4000/Examen/Guia/");//your url i.e fetch data from .
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String output;
            String json = "";
            
            Gson g = new Gson();
            while ((output = br.readLine()) != null) {
                json = output;
                System.out.println(output);
            }

            JsonParser parser = new JsonParser();
            JsonArray gsonArr = parser.parse(json).getAsJsonArray();

            for (JsonElement obj : gsonArr) {
                JsonObject gsonObj = obj.getAsJsonObject();
                System.out.println(gsonObj);
                String numero_guia = gsonObj.get("numero_guia").getAsString();
                String fechaTemp = gsonObj.get("fecha").getAsString();
                String horaTemp = gsonObj.get("hora").getAsString();
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
                String nombre_despachador = gsonObj.get("nombre_despachador").getAsString();
                Guia guia = new Guia(numero_guia, fecha_apertura, hora, nombre_despachador);
                p.add(guia);

            }
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        System.out.println(p.toString());
        return p;
    }
     public  LinkedList<Producto> getListadoById(String numero) {
          LinkedList<Producto> p = new LinkedList<Producto>();
        try {

            URL url = new URL("http://localhost:4000/Examen/Guia/DespachoGuia/"+numero);//your url i.e fetch data from .
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String output;
            String json = "";
            
            Gson g = new Gson();
            while ((output = br.readLine()) != null) {
                json = output;
                System.out.println(output);
            }

             JsonParser parser = new JsonParser();
            JsonArray gsonArr = parser.parse(json).getAsJsonArray();

            for (JsonElement obj : gsonArr) {
                JsonObject gsonObj = obj.getAsJsonObject();
                int codigo = gsonObj.get("codigo").getAsInt();
                String descripcion = gsonObj.get("descripcion").getAsString();
                double precio = gsonObj.get("precio").getAsDouble();
                JsonObject gsonObj2 = gsonObj.get("grabado").getAsJsonObject();
                int temp = gsonObj2.get("data").getAsInt();
                boolean grabado = true;
                if (temp == 0) {
                    grabado = false;
                }
                String imagen = gsonObj.get("imagen").getAsString();
                int cantidad = gsonObj.get("cantidad").getAsInt();
                Producto producto = new Producto(codigo, descripcion, precio, grabado, imagen, cantidad);
                p.add(producto);

            }
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
       System.out.println(p.toString());
        return p;
    }
      public  boolean getGuiById(String numero) {
          boolean p = true;
        try {

            URL url = new URL("http://localhost:4000/Examen/Guia/"+numero);//your url i.e fetch data from .
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String output;
            String json = "";
            
            Gson g = new Gson();
            while ((output = br.readLine()) != null) {
                json = output;
                System.out.println(output);
            }

             if(json.length()<20){
                 p=false;

            }
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }

        return p;
    }
      public  boolean getListadoDespacho(int numero) {
          boolean p = true;
        try {

            URL url = new URL("http://localhost:4000/Examen/Guia/Despacho/"+numero);//your url i.e fetch data from .
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String output;
            String json = "";
            
            Gson g = new Gson();
            while ((output = br.readLine()) != null) {
                json = output;
                System.out.println(output);
            }

             JsonParser parser = new JsonParser();
            JsonObject gsonArr = parser.parse(json).getAsJsonObject();
                if(json.length()<20){
                    p=false;
                }
            
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
      System.out.println(p);
        return p;
    }

public  String createGuia(Guia p) {
      
         String id="";
        try {
            JsonParser parserDos = new JsonParser();
             Gson g = new Gson();
            String ob=g.toJson(p);
             
            
            URL url = new URL("http://localhost:4000/Examen/Guia/Java/");//your url i.e fetch data from .
           Map<String,Object> params = new LinkedHashMap<>();
        params.put("Guia", ob);


        StringBuilder postData = new StringBuilder();
        for (Map.Entry<String,Object> param : params.entrySet()) {
            if (postData.length() != 0) postData.append('&');
            postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
            postData.append('=');
            postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
        }
        byte[] postDataBytes = postData.toString().getBytes("UTF-8");

        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
        conn.setDoOutput(true);
        conn.getOutputStream().write(postDataBytes);
            Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

        for (int c; (c = in.read()) >= 0;)
            System.out.print((char)c);
        conn.disconnect();
        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        return id;
    }
public  String createDespacho(int codigo,String numero_guia,int cantidad) {
      
         String id="";
        try {
            JsonParser parserDos = new JsonParser();
             Gson g = new Gson();
            String ob=g.toJson("{numero_guia:"+numero_guia+",codigo:"+codigo+",cantidad:"+cantidad+"}");
                System.out.println(ob);
            
            URL url = new URL("http://localhost:4000/Examen/Guia/Despacho/Java/");//your url i.e fetch data from .
           Map<String,Object> params = new LinkedHashMap<>();
        params.put("Despacho", ob);


        StringBuilder postData = new StringBuilder();
        for (Map.Entry<String,Object> param : params.entrySet()) {
            if (postData.length() != 0) postData.append('&');
            postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
            postData.append('=');
            postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
        }
        byte[] postDataBytes = postData.toString().getBytes("UTF-8");

        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
        conn.setDoOutput(true);
        conn.getOutputStream().write(postDataBytes);
            Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

        for (int c; (c = in.read()) >= 0;)
            System.out.print((char)c);
        conn.disconnect();
        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        return id;
    }

 
}
