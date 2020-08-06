import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JTextArea;
import java.awt.Color;
public class GUI extends JFrame{
  private JLabel lTexto;
  private JTextField tfTexto;
  private JButton btnAceptar;
    private JButton btnReiniciar;
    private JTextArea taTextoEscrito;
  public GUI(){
    this.settfTexto();
    this.setBtnAceptar();
    this.setLTexto();
    this.setBtnReiniciar();
    this.setTATextoEscrito();
    
    this.add(tfTexto);
    this.add(btnAceptar);
    this.add(lTexto);
    this.add(btnReiniciar);
    this.add(taTextoEscrito);
    
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
  private void settfTexto(){
    this.tfTexto=new JTextField();
    this.tfTexto.setBounds(100,35,150,30);
    this.tfTexto.setVisible(true);
    //this.tfTexto.setEnabled(false);
     this.tfTexto.setBackground(Color.MAGENTA);
  }
  
  public JTextField gettfTexto(){
    return this.tfTexto;
  }
  
  private void setBtnAceptar(){
   this.btnAceptar=new JButton("Aceptar");
   // this.btnAceptar.setText("Aceptar");
   this.btnAceptar.setBounds(100,75,80,30);
   this.btnAceptar.setBackground(Color.PINK);
   
  }
  private void setBtnReiniciar(){
   this.btnReiniciar=new JButton("Reinicar y levantar nueva interfaz");
   // this.btnAceptar.setText("Aceptar");
  this.btnReiniciar.setBounds(25,115,250,35);
   this.btnReiniciar.setBackground(Color.PINK);
   
  }
  public JButton getBtnReiniciar(){
    return this.btnReiniciar;
  }
  public JButton getBtnAceptar(){
    return this.btnAceptar;
  }
  
  private void setLTexto(){
   this.lTexto=new JLabel("Ingrese texto"); 
   this.lTexto.setBounds(100,5,150,30);
  }
  private void setTATextoEscrito(){
   this.taTextoEscrito=new JTextArea();
   this.taTextoEscrito.setBounds(100,165,200,60);
   this.taTextoEscrito.setEnabled(false);
   this.btnReiniciar.setBackground(Color.PINK);
  }
  
  public JTextArea getTATextoEscrito(){
   return this.taTextoEscrito; 
  }
}