import javax.swing.*;
public class EjemploFor{
  public static void main(String args[]){
    //[3][2][4][5]
    int tamanio=Integer.parseInt(JOptionPane.showInputDialog("Ingrese tamanio de vector"));
    int [] vector=new int[tamanio];
    for(int j=0;j<vector.length;j++){
      vector[j]=(int)(Math.random()*9)+1;
    }
    
    System.out.println(vector.length);
    for(int i=0;i<vector.length;i++){
      if(vector[i]%2==0){
        System.out.println("Numero par:["+vector[i]+"]"); 
      }else{
        System.out.println("Numero Impar:["+vector[i]+"]"); 
      }
    }
  }
  
  
}