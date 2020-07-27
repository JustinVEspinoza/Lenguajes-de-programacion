public class Controller{
  Logica logica;
  public Controller(){
    logica=new Logica();
    control();
  }
  
  public void control(){
    int[][] matriz=new int[5][5];
    matriz=logica.llenarMatriz(matriz);
    logica.imprimir(matriz);
    String [][] A=new String[5][9];
    String [][] C=new String[5][5];
     String [][] O=new String[5][5];
      String [][] X=new String[5][5];
      String [][] T=new String[5][5];
    A=logica.formarA(A);
    C=logica.formarC(C);
    O=logica.formarO(O);
    T=logica.formarT(O);
     X=logica.formarX(X);
    logica.imprimirDos(A);
    logica.imprimirDos(C);
    logica.imprimirDos(O);
    logica.imprimirDos(X);
    logica.imprimirDos(T);
    //Ejercicios:E,K,Z y M
    /*
     * 4. Formar una cadena de texto de tamaño 5 con 
     * caracteres aleatorios de otra cadena de texto 
     * predefinida como la variable String alfabeto.
      *  a. Ejemplo:String alfabeto=”abcdefghijklmnopqrstuvwxyz”; 
      * String palabraNueva=”cdaer”;
     *
     5. Plantear un programa que reciba un párrafo de 
     un usuario y lo divida por palabras separadas y 
     lo muestre en un mensaje palabra por palabra. 
     *
     */
  }
}