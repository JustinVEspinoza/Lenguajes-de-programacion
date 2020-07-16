public class Logic{
  public char[] llenarvector(){
   String alfabeto="abcdefghijklmnopqrstuvwxyz";     
    int numrandomuno=5; 
    char [] vector= new char [numrandomuno];   
    for (int j =0 ; j < vector.length; j ++ ) { 
      numrandomuno=(int)(Math.random()*alfabeto.length());
      vector[j] =alfabeto.charAt(numrandomuno);
    }
    
    return vector;
  }
  public String imprimirVectores(char[] vector){
    //Imprimir vectores
    String vectorUno="";
    for (int i = 0 ; i < vector.length; i ++ ) {   
      vectorUno+=" [ "+ vector[i]+" ] ";
    }
    return vectorUno;
  }
  public String mensaje(){
   String m="Hola linda, que tal?";
   return m;
  }
  public boolean isValid(){
   int numero=(int)(Math.random()*100)+1;
   
   boolean validar=true;
   System.out.println("Numero generado:"+numero);
   if(numero<50){
     validar=false;
   }
   return validar;
  }
  public int resta(int num1,int num2){
    int resta=num1-num2;
    return resta;
  }
  public int generarRandom(){
   return (int)(Math.random()*100)+1; 
  }
  public int suma(int num1,int num2){
    int suma=num1+num2;
    return suma;
  }
}