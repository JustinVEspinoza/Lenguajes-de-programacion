// Ejercicio de numeros pares
import javax.swing.JOptionPane;
public class NumerosPares{
  public static void main(String args[]){
     int primerNumero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el maximo"));
     for(int i=1;i<=primerNumero;i++){
       if(i%2==0){
        System.out.println("El numero "+i+" es par"); 
       }else{
         System.out.println("El numero "+i+" es impar"); 
       }
     }
  }
  
}