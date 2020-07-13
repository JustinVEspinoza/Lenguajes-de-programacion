import javax.swing.JOptionPane;
public class EjemploWhile{
  public static void main(String args[]){
    boolean validar=true;
    int opcion,operacion,numero1,numero2;
    while(validar){
      opcion=Integer.parseInt(JOptionPane.showInputDialog("Menu:\n1.Suma\n2.Resta\n3.Salir"));
      switch(opcion){
        case 1:
          numero1=Integer.parseInt(JOptionPane.showInputDialog("Ingrese numero 1"));
          numero2=Integer.parseInt(JOptionPane.showInputDialog("Ingrese numero 2"));
          operacion=numero1+numero2;
          JOptionPane.showMessageDialog(null,"El resultado es "+operacion);
          break;
        case 2:
          numero1=Integer.parseInt(JOptionPane.showInputDialog("Ingrese numero 1"));
          numero2=Integer.parseInt(JOptionPane.showInputDialog("Ingrese numero 2"));
          operacion=numero1-numero2;
          JOptionPane.showMessageDialog(null,"El resultado es "+operacion);
          break;
        case 3:
          JOptionPane.showMessageDialog(null,"El programa finalizo con exito");
          validar=false;
          break; 
      }
    }
    
  }
  
}