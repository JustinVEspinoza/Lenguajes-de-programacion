import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JOptionPane;
public class Controller implements ActionListener{
  private GUI gui;
  private int contador;
  private String mensaje;
  private GUIMatriz guiM;
  public Controller(){
    contador=0;
    mensaje="";
    gui=new GUI();

    inicializarAccionesDeBotones();
  }
  
  public void inicializarAccionesDeBotones(){
    this.gui.getBtnAceptar().addActionListener(this);
    this.gui.getBtnReiniciar().addActionListener(this);
  }
  
  public void actionPerformed(ActionEvent e){
    if(e.getSource()==this.gui.getBtnAceptar()){
      mensaje=this.gui.gettfTexto().getText();
     this.gui.getTATextoEscrito().append(" "+mensaje);
     contador++;
    }
    
    if(e.getSource()==this.gui.getBtnReiniciar()){
      JOptionPane.showMessageDialog(null, "Has reiniciado el programa");
      contador=0;
      this.gui.gettfTexto().setText("");
      this.gui.setVisible(false);
      guiM=new GUIMatriz();
    }
    
    
    
  }
  
}