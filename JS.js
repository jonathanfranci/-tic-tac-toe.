var jogo=[];
var tabuleiro=[];
var quemjoga = 0;//jogador 1cpu
var verifica;
var jogando= true;
var nivel=2;
var jogadacpu=1;
var quemcomeca=1;
var jogada=0;



function cpujoga(){

    if(jogando){
        var l,c;
        if(nivel==1){
            do{
              
                l= Math.round(Math.random()*2);
                c= Math.round(Math.random()*2);
            }while(jogo[l][c] !="");
            jogo[l][c]="O";


        }else if(nivel==2){
            //ataque
        //jogada linha 1
        if((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
            jogo[0][2]="O";

        }else if((jogo[0][0]=="O")&&(jogo[0][2]=="O")&&(jogo[0][1]=="")){
            jogo[0][1]="O";

        }else if((jogo[0][1]=="O")&&(jogo[0][2]=="O")&&(jogo[0][0]=="")){
            jogo[0][0]="O";

        }else
        //jogada linha 2

        if((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
            jogo[1][2]="O";

        }else if((jogo[1][0]=="O")&&(jogo[1][2]=="O")&&(jogo[1][1]=="")){
            jogo[1][1]="O";

        }else if((jogo[1][1]=="O")&&(jogo[1][2]=="O")&&(jogo[1][0]=="")){
            jogo[1][0]="O";


        }else
       //jogada linha 3
       if((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
        jogo[2][2]="O";

       }else if((jogo[2][0]=="O")&&(jogo[2][2]=="O")&&(jogo[2][1]=="")){
        jogo[2][1]="O";

       }else if((jogo[2][1]=="O")&&(jogo[2][2]=="O")&&(jogo[2][0]=="")){
        jogo[2][0]="O";


        }else
      //jogada coluna1
      if((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
        jogo[2][0]="O";

      }else if((jogo[0][0]=="O")&&(jogo[2][0]=="O")&&(jogo[1][0]=="")){
        jogo[1][0]="O";

      }else if((jogo[1][0]=="O")&&(jogo[2][0]=="O")&&(jogo[0][0]=="")){
        jogo[0][0]="O";


       }else
       //jogada coluna 2

       if((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
        jogo[2][1]="O";

      }else if((jogo[0][1]=="O")&&(jogo[2][1]=="O")&&(jogo[1][1]=="")){
        jogo[1][1]="O";

      }else if((jogo[1][1]=="O")&&(jogo[2][1]=="O")&&(jogo[0][1]=="")){
        jogo[0][1]="O";


       }else

       //jogada coluna3 

       if((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
        jogo[2][2]="O";

      }else if((jogo[0][2]=="O")&&(jogo[2][2]=="O")&&(jogo[1][2]=="")){
        jogo[1][2]="O";

      }else if((jogo[1][2]=="O")&&(jogo[2][2]=="O")&&(jogo[0][2]=="")){
        jogo[0][2]="O";


       }else

       //jogada diagona1

       if((jogo[0][0]=="O")&&(jogo[1][1]=="O")&&(jogo[2][2]=="")){
           jogo[2][2]="O";

       }else if((jogo[0][0]=="O")&&(jogo[2][2]=="O")&&(jogo[1][1]=="")){
                 jogo[1][1]="O";

       }else if((jogo[1][1]=="O")&&(jogo[2][2]=="O")&&(jogo[0][0]=="")){
                 jogo[0][0]="O";


        }else
        //jogada diagona2

       if((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
        jogo[2][0]="O";

       }else if((jogo[0][2]=="O")&&(jogo[2][0]=="O")&&(jogo[1][1]=="")){
              jogo[1][1]="O";

      }else if((jogo[2][0]=="O")&&(jogo[1][1]=="O")&&(jogo[0][2]=="")){
              jogo[0][2]="O";

        }else
      //defesa
      //jogadas linha 1

      //jogada diagona1

      if((jogo[0][0]=="x")&&(jogo[0][1]=="x")&&(jogo[0][2]=="")){
        jogo[0][2]="O";

    }else if((jogo[0][0]=="x")&&(jogo[0][2]=="x")&&(jogo[0][1]=="")){
        jogo[0][1]="O";

    }else if((jogo[0][1]=="x")&&(jogo[0][2]=="x")&&(jogo[0][0]=="")){
        jogo[0][0]="O";

    }else
    //jogada linah 2

    if((jogo[1][0]=="x")&&(jogo[1][1]=="x")&&(jogo[1][2]=="")){
        jogo[1][2]="O";

    }else if((jogo[1][0]=="x")&&(jogo[1][2]=="x")&&(jogo[1][1]=="")){
        jogo[1][1]="O";

    }else if((jogo[1][1]=="x")&&(jogo[1][2]=="x")&&(jogo[1][0]=="")){
        jogo[1][0]="O";


    }else
   //jogada linha 3
   if((jogo[2][0]=="x")&&(jogo[2][1]=="x")&&(jogo[2][2]=="")){ ok
    jogo[2][2]="O";

   }else if((jogo[2][0]=="x")&&(jogo[2][2]=="x")&&(jogo[2][1]=="")){
    jogo[2][1]="O";

   }else if((jogo[2][1]=="x")&&(jogo[2][2]=="x")&&(jogo[2][0]=="")){
    jogo[2][0]="O";


    }else
  //jogada coluna1
  if((jogo[0][0]=="x")&&(jogo[1][0]=="x")&&(jogo[2][0]=="")){
    jogo[2][0]="O";

  }else if((jogo[0][0]=="x")&&(jogo[2][0]=="x")&&(jogo[1][0]=="")){
    jogo[1][0]="O";

  }else if((jogo[1][0]=="x")&&(jogo[2][0]=="x")&&(jogo[0][0]=="")){
    jogo[0][0]="O";


   }else
   //jogada coluna 2

   if((jogo[0][1]=="x")&&(jogo[1][1]=="x")&&(jogo[2][1]=="")){ ok
    jogo[2][1]="O";

  }else if((jogo[0][1]=="x")&&(jogo[2][1]=="x")&&(jogo[1][1]=="")){
    jogo[1][1]="O";

  }else if((jogo[1][1]=="x")&&(jogo[2][1]=="x")&&(jogo[0][1]=="")){
    jogo[0][1]="O";


   }else

   //jogada coluna3

   if((jogo[0][2]=="x")&&(jogo[1][2]=="x")&&(jogo[2][2]=="")){ ok
    jogo[2][2]="O";

  }else if((jogo[0][2]=="x")&&(jogo[2][2]=="x")&&(jogo[1][2]=="")){
    jogo[1][2]="O";

  }else if((jogo[1][2]=="x")&&(jogo[2][2]=="x")&&(jogo[0][2]=="")){
    jogo[0][2]="O";


   }else

   //jogada diagona1

   if((jogo[0][0]=="x")&&(jogo[1][1]=="x")&&(jogo[2][2]=="")){ ok
       jogo[2][2]="O";

   }else if((jogo[0][0]=="x")&&(jogo[2][2]=="x")&&(jogo[1][1]=="")){
             jogo[1][1]="O";

   }else if((jogo[1][1]=="x")&&(jogo[2][2]=="x")&&(jogo[0][0]=="")){
             jogo[0][0]="O";


    }else
    //jogada diagona2

   if((jogo[0][2]=="x")&&(jogo[1][1]=="x")&&(jogo[2][0]=="")){ ok
    jogo[2][0]="O";

   }else if((jogo[0][2]=="x")&&(jogo[2][0]=="x")&&(jogo[1][1]=="")){
          jogo[1][1]="O";

  }else if((jogo[2][0]=="x")&&(jogo[1][1]=="x")&&(jogo[0][2]=="")){
          jogo[0][2]="O";

    }else{
  if(jogada<8){
     
        do{
              
            l= Math.round(Math.random()*2);
            c= Math.round(Math.random()*2);
        }while(jogo[l][c] !="");
        jogo[l][c]="O";

     }else{

        for(var l=0;l<3;l++){
            for(var c=0;c<3;c++){
                if(jogo[l][c]==""){
                    jogo[1][c]="O";
                }
            }
          }


     }
   }
}



        }
        verifica=vareficavitoria();
        if(verifica!=""){
           alert(verifica+"venceu");
           jogando=false;


        }
        atualizatabuleiro();
        jogada++;
        quemjoga=0;

    }


function vareficavitoria(){
  var l,c;
  //linhas
  for(l=0;l<3;l++){
     if((jogo[1][0]==jogo[l][1])&&(jogo[l][1]==jogo[1][2])){
         return jogo[l][0];

     }

  }
  //colunas
  for(c=0;c<3;c++){
    if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
        return jogo[0][c];


    }
}
    //diagonal
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
        return jogo[0][0];

    }
    
        if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){
            return jogo[0][2];

    }
    return "";
}
function jogar(p){
   if((jogando)&&(quemjoga== 0)){
       switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="x";
                    quemjoga =1;
                }
                 break;

            case 2:
              if(jogo[0][1]==""){
                jogo[0][1]="x";
                quemjoga =1;
                }
                break;

            case 3:
              if(jogo[0][2]==""){
                jogo[0][2]="x";
                 quemjoga =1;
                 }
                break;

           case 4:
              if(jogo[1][0]==""){
                jogo[1][0]="x";
                 quemjoga =1;
                }                         
               break;

         case 5:
            if(jogo[1][1]==""){
               jogo[1][1]="x";
               quemjoga =1;
            }

               break;

         case 6:
            if(jogo[1][2]==""){
               jogo[1][2]="x";
               quemjoga =1;
           }
             break;

         case 7:
             if(jogo[2][0]==""){
               jogo[2][0]="x";
               quemjoga =1;
           }
             break; 

        case 8:
            if(jogo[2][1]==""){
            jogo[2][1]="x";
             quemjoga =1;
          }
             break;

        default://caso9
            if(jogo[2][2]==""){
              jogo[2][2]="x";
              quemjoga =1;
         }
        break;

      } 
      if(quemjoga==1){
      atualizatabuleiro(); 
      verifica=vareficavitoria();
      if(verifica!=""){
         alert(verifica+"venceu");
         jogando=false;
      }
      jogada++;
      cpujoga();
    }
                                        
}


}

function atualizatabuleiro(){
       for(var l=0; l<3;l++){

         for(var c=0; c<3;c++){
             if(jogo[l][c] =="x"){
                 tabuleiro[l][c].innerHTML ="x";
                 tabuleiro[l][c].style.cursor ="default";
             }else if(jogo[l][c] =="O"){
                tabuleiro[l][c].innerHTML ="O";
                tabuleiro[l][c].style.cursor ="default";


             }else{

                tabuleiro[l][c].innerHTML ="";
                tabuleiro[l][c].style.cursor ="pointer";

             }


         }

       } 

}
   

function inicia(){
    jogando=true;
    jogadacpu=1;
    jogada=0;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    
    ];
    tabuleiro=[
        [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
        [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")],
    ];

    atualizatabuleiro();
    if(quemcomeca==1){
        quemcomeca=0;
        quemjoga=quemcomeca;
        document.getElementById("dvquemcomeca").innerHTML="Quem Começa: jogador";
    }else{
        quemcomeca=1;
        quemjoga=quemcomeca;
        document.getElementById("dvquemcomeca").innerHTML="Quem Começa: ";
        cpujoga();
    }

}
window.addEventListener("load",inicia);