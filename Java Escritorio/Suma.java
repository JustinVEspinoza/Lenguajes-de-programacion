import javax.swing.JOptionPane; 
public class Suma {
  
  public static void main(String args[]) { 
    String primerNumero, segundoNumero; 
    float num1, num2, suma; 
    primerNumero = JOptionPane.showInputDialog("Ingrese el pri. n�m:"); 
    segundoNumero = JOptionPane.showInputDialog("Ingrese el sdo n�m:"); 
// Conversi�n desde String a tipo double 
    num1 = Float.parseFloat(primerNumero); 
    num2 = Float.parseFloat(segundoNumero); 
// sumar los n�meros 
    suma = num1 + num2; 
// desplegar el resultado 
    JOptionPane.showMessageDialog(null,"La suma es " + suma, 
                                  "Resultados", JOptionPane.PLAIN_MESSAGE); 
  }// fin del m�todo principal 
} // fin de clase