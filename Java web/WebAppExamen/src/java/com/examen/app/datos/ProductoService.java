/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examen.app.datos;

import com.examen.app.dominio.Producto;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.LinkedList;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.DataOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.Map;
import java.io.*;
import java.net.*;
import java.util.*;

public class ProductoService {
   // public static void main(String args[]){
     //   LinkedList<Producto> p =ProductoService.getListado();
        //System.out.println(p.toString());
      //  Producto pro=ProductoService.getProductoById(8);
      //  System.out.println(pro.toString());
       // System.out.println(ProductoService.getNewId());
       // System.out.println(ProductoService.deleteById(9));
       // ProductoService.createProducto(new Producto(ProductoService.getNewId(),"Pepperoni",35.5,true,"2.jpg", 5));
        
   // }
    public  LinkedList<Producto> getListado() {
        LinkedList<Producto> p = new LinkedList<Producto>();
        try {

            URL url = new URL("http://localhost:4000/Examen/Producto/");//your url i.e fetch data from .
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
        return p;
    }
    public  Producto getProductoById(int codigo) {
      
         Producto producto = null;
        try {

            URL url = new URL("http://localhost:4000/Examen/Producto/"+codigo);//your url i.e fetch data from .
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
            JsonObject gsonObj = parser.parse(json).getAsJsonObject();
            int codigor = gsonObj.get("codigo").getAsInt();
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
            producto = new Producto(codigor, descripcion, precio, grabado, imagen, cantidad);
            conn.disconnect();
        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        return producto;
    }
     public  boolean deleteById(int codigo) {
      
         boolean producto = true;
        try {

            URL url = new URL("http://localhost:4000/Examen/Producto/"+codigo);//your url i.e fetch data from .
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("DELETE");
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
            JsonObject gsonObj = parser.parse(json).getAsJsonObject();
            
            conn.disconnect();
        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        return producto;
    }
     public  int getNewId() {
      
         int id=0;
        try {

            URL url = new URL("http://localhost:4000/Examen/Producto/getNewId/");//your url i.e fetch data from .
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
            }
            JsonParser parser = new JsonParser();
            JsonArray gsonArr = parser.parse(json).getAsJsonArray();

            for (JsonElement obj : gsonArr) {
                JsonObject gsonObj = obj.getAsJsonObject();
                 int codigo = gsonObj.get("codigo").getAsInt();
                 id = codigo;
            }
            
            
            conn.disconnect();
        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
        return id;
    }
     public  String createProducto(Producto p) {
      
         String id="";
        try {
            JsonParser parserDos = new JsonParser();
             Gson g = new Gson();
            String ob=g.toJson(p);
             
            
            URL url = new URL("http://localhost:4000/Examen/Producto/Java/");//your url i.e fetch data from .
           Map<String,Object> params = new LinkedHashMap<>();
        params.put("Producto", ob);


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
