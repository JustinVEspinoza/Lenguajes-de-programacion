public class LogicaVectores{
  
  public int[] llenarVector(int[] vector){
     for(int i=0;i<vector.length;i++){
      vector[i]=(int)(Math.random()*99)+1;
     }
     return vector;
  }
  public String imprimirVector(int[] vector){
   String textoVector="";
   for(int i=0;i<vector.length;i++){
      textoVector+="["+vector[i]+"]";
   }
   return textoVector;
  }
}