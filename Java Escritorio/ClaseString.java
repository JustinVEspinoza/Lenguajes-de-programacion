public class ClaseString{
  
  public static void main(String args[]){
    String cadenaTexto="Hola";
    String cadenaTexto2="hola";
    String subcadena=cadenaTexto.substring(1,4);
     System.out.println("Subcadena:"+subcadena);
    String cadenaMinusculas=cadenaTexto.toLowerCase();
    String cadenaMayuscula=cadenaTexto.toUpperCase();
    System.out.println("Cadena Minusculas:"+cadenaMinusculas);
    System.out.println("Cadena Mayusucla:"+cadenaMayuscula);
    int numero=0;
    char caracter=cadenaTexto.charAt(2);
    if(cadenaTexto.equalsIgnoreCase(cadenaTexto2)){//equals
      System.out.println("Exito");
    }
    for(int i=0;i<cadenaTexto.length();i++){
      System.out.println(cadenaTexto.charAt(i));
    }
    
  }
}