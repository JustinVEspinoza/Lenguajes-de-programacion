public class CicloWhile{
  
  public static void main(String args[]){
    /* Ciclo Mientras */
    int contador=0;
    boolean validar=true;
    while(contador<10){
      System.out.println("Vuelta numero:"+contador);
      //contador=contador+1;
      contador++;
    }
    contador=0;
    while(validar==true){
       System.out.println("Vuelta de while 2 numero:"+contador);
       if(contador==9){
        validar=false; 
       }
       contador++;
    }
  }
  
}