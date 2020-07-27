public class Logica{
  public int[][] llenarMatriz(int[][] matriz){
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        matriz[i][j]=(int)(Math.random()*9)+1;
      }
    }
    return matriz;
  }
  public String[][] formarX(String[][] matriz){
    int topeColumna=matriz[0].length-1;
    int inicioFila=0;
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        if(j==topeColumna && inicioFila==i){
          matriz[inicioFila][topeColumna]="*";
          topeColumna--;
          inicioFila++;
        }
        else{
          if(i==j){
            matriz[i][j]="*";
          }else{
            matriz[i][j]=" "; 
          }
        }
      }
    }
    return matriz;
  }
  public String[][] formarT(String[][] matriz){
    int mitad=matriz[0].length/2;
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        if(i==0){
           matriz[i][j]="*";
        }else{
          if(j==mitad){
             matriz[i][j]="*";
          }else{
            matriz[i][j]=" "; 
          }
        }
      }
    }
    return matriz;
  }
  public String[][] formarA(String[][] matriz){
    int mitad=matriz[0].length/2;
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        if((mitad-i==j) || (mitad+i==j)){
          matriz[i][j]="*";
        }else{
          if(i==matriz.length/2 && mitad-i<=j && mitad+i>=j){
            matriz[i][j]="*";
          }else{
            matriz[i][j]=" ";//Llenar vacio
          }
        }
      }
    }
    return matriz;
  }
  
  public String[][] formarC(String[][] matriz){
    
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        if(i==0){
          matriz[i][j]="*";
        }else{
          if(j==0){
            matriz[i][j]="*";
          }else{
            if(i==matriz.length-1){
              matriz[i][j]="*";
            }else{
              matriz[i][j]=" ";
            }
          }
        }
      }
    }
    return matriz;
  }
  public String[][] formarO(String[][] matriz){
    
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        if(i==0 ){
          matriz[i][j]="*";
        }else{
          if(j==0){
            matriz[i][j]="*";
          }else{
            if(i==matriz.length-1){
              matriz[i][j]="*";
            }else{
              
              if(j==matriz[0].length-1){
                matriz[i][j]="*";
              }else{
                matriz[i][j]=" ";
              }
            }
          }
        }
      }
    }
    return matriz;
  }
  public void imprimir(int[][] matriz){
    String imprimir="";
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        // System.out.println(matriz[i][j]);
        imprimir+="["+matriz[i][j]+"]";
      }
      imprimir+="\n";
    }
    System.out.println(imprimir);
    
  }
  public void imprimirDos(String[][] matriz){
    String imprimir="";
    for(int i=0;i<matriz.length;i++){//Filas
      for(int j=0;j<matriz[0].length;j++){//Columnas
        // System.out.println(matriz[i][j]);
        imprimir+=" "+matriz[i][j]+" ";
      }
      imprimir+="\n";
    }
    System.out.println(imprimir);
    
  }
}