import javax.swing.JOptionPane; 
public class VectoresJ {   
  public static void main (String args []) {      
   //Declaracion e inicializacion de variables
    String alfabeto="abcdefghijklmnopqrstuvwxyz";     
    int numerorandom=0;
    numerorandom=(int)(Math.random()*alfabeto.length());
     char [] vector= new char [numerorandom];   
    char [] vector2= new char [numerorandom]; 
    int j;  int i,numrandomuno,numrandomdos; 
    String vectorUno="";
    String vectorDos="";
    
    //Encargado de llenar vectores
    for (j =0 ; j < vector.length; j ++ ) { 
      numrandomuno=(int)(Math.random()*alfabeto.length());
      vector[j] =alfabeto.charAt(numrandomuno);
      numrandomdos=(int)(Math.random()*alfabeto.length());
      vector2[j] =alfabeto.charAt(numrandomdos);
    }
    //Imprimir vectores
    for (i = 0 ; i < vector.length; i ++ ) {   
      vectorUno+=" [ "+ vector[i]+" ] ";
      vectorDos+=" [ "+ vector2[i]+" ] ";
    }
    JOptionPane.showMessageDialog(null,vectorUno+"\n"+vectorDos) ;  
    
 }//main 
}//class 
