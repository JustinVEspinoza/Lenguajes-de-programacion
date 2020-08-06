import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JButton;
public class GUIMatriz extends JFrame{
  public GUIMatriz(){
    
    
    inicializarLayout();
  }
  public void inicializarLayout(){//crea la ventana
    setTitle("Primera interfaz");
   
    setLayout(null);
    setSize(350,350);
    
    setLocationRelativeTo(null);
    setResizable(false);
    setVisible(true);
    
  }
}