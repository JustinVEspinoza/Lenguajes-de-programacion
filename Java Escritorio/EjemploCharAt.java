public class EjemploCharAt{
  public static void main(String args[]){
    String cadena="Hola NEy como estas? ";
    String vocales="aeiou";
    String palabra="";
    int contador=0;
    for(int i=0;i<cadena.length();i++){
      if(cadena.charAt(i)!=' '){
        palabra+=cadena.charAt(i);
      }else{
        System.out.println(palabra);
        //
        palabra=palabra.toLowerCase();
        contador=0;
        for(int j=0;j<palabra.length();j++){
          for(int k=0;k<vocales.length();k++){
            if(palabra.charAt(j)==vocales.charAt(k)){
              System.out.println(palabra.charAt(j));
              contador++;
            }
          }
        }
        System.out.println("Tiene "+contador+" vocales");
        palabra="";
      }
    }
   //Validar Si una palabra tiene un numero
    //Se presenta una caja de texto donde el usuario ingrese una palabra
    //Si la cadena tiene un numero, el usuario tiene que ingresar el texto
    //Si no tiene numeros, validar cuantas consonantes 
    
    //Llenar dos vectores con letras de forma aleatoria y imprimirlos
    
  }
}