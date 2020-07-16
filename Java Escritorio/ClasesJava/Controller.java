public class Controller{
  Logic logic;
  int suma,resta;
  public Controller(){
    logic=new Logic();
    control();
  }
  
  public void control(){
    
    String mensaje=logic.mensaje();
    boolean validar=logic.isValid();
    System.out.println(mensaje+" "+validar);
    System.out.println("Bienvenido:\n1.Suma\n2.Resta\n3.Vectores");
    int opcion=3;
    switch(opcion){
      case 1:
        suma=logic.suma(4,5);
        System.out.println(suma+" ");
        break;
      case 2:
         resta=logic.resta(10,5);
         System.out.println(resta+" ");
        break;
      case 3:
        char[] v1=logic.llenarvector();
        char[] v2=logic.llenarvector();
        char[] v3=logic.llenarvector();
        char[] v4=logic.llenarvector();
        
        String vector1=logic.imprimirVectores(v1);
        String vector2=logic.imprimirVectores(v2);
        System.out.println(vector1+" \n"+vector2);
        
        break;
    }
    
    
    
    
   
    
  }
  
}