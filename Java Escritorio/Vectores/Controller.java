public class Controller{
  GUI gui;
  LogicaVectores logicV;
  LogicaGeneral logicG;
  public Controller(){
    //Constructor
    gui=new GUI();
    logicV=new LogicaVectores();
    logicG=new LogicaGeneral();
    control();
    
  }
  
  public void control(){
    boolean validar=false;
    while(validar==false){
      String numero=gui.getInputText("Ingrese un numero");
      validar=logicG.validarNumero(numero);
      ifValidar(validar,numero);
    }
  }
  
  public void ifValidar(boolean validar,String numero){
    int tamanio;
    int [] vector;
    String imprimir="";
    if(validar==true){
      tamanio=Integer.parseInt(numero);
      vector=new int[tamanio];
      vector=logicV.llenarVector(vector);
      imprimir=logicV.imprimirVector(vector);
      gui.showMessage(imprimir);
    }else{
      gui.showMessage("Usted no ingreso un numero, por lo que el programa termino"); 
    }
  }
  

  
  
}