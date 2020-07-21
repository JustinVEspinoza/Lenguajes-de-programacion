import javax.swing.JOptionPane;
public class GUI{

  //Metodo que le pide al usuario que ingrese un texto
  public String getInputText(String message){
    String text=JOptionPane.showInputDialog(message);
    return text;
  }
  //Metodo que muestra mensajes de salida al usuario
  public void showMessage(String message){
    JOptionPane.showMessageDialog(null,message);
  }
}