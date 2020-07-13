public class Ejemplo{
  
  public static void main(String args[]){
    // Comentario de una linea
    
    /*
     * Comentario Multipleas lineas
     */
    System.out.println("Hola gente, que tal estas");
    
    byte numeroByte=127;
    short numeroCorto=32767;
    int numeroEntero=214748364;//El mas comun y utilizado
    long numeroLargo=999999999;
    
    float numeroFlotante=32;
    double numeroDecimal=3.4444;
    
    char caracter='A';
    String cadenaCaracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.<>/?[]{}=+-_/()*&^%$#@!`~";
    
    boolean booleano=true;
    booleano=false;
    //No se puede igual variables de tipos distintas, a menos que se haga una conversion
    //int=Integer.parseInt(2.55);
    numeroEntero=(int)numeroDecimal;
    System.out.println(numeroEntero);
    numeroEntero=Integer.parseInt("2");
    System.out.println(numeroEntero);
    double numero=Math.floor(2.9);
    System.out.println("Numero redondeado es:"+numero+" "+numeroEntero);
    /* Si, entonces, sino*/
    if(numeroEntero==1){
      System.out.println("Si");
    }else{
      System.out.println("No");
    }
    
    /* Switch */
    switch(numeroEntero){
      case 1:
        System.out.println("Hola 1");
        break;
      
       case 2:
        System.out.println("Hola 2");
        break;
        
    }
    
    System.out.println("\n");
    
  }
}