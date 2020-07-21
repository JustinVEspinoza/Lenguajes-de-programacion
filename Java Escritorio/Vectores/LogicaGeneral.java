public class LogicaGeneral{
  public boolean validarNumero(String cadena){//12H
    boolean validar=true;
    String numeros="0123456789";
    int contador=0;
    for(int i=0;i<cadena.length();i++){
      for(int j=0;j<numeros.length();j++){
        if(cadena.charAt(i)==numeros.charAt(j)){
          contador++;//1, 2
        }
      }
    }
    
    
    if(contador<cadena.length()){
      validar=false;//La cadena tiene caracteres no numericos
    }
    return validar;
  }
  
}