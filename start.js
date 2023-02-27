class Start{
    
    constructor(){

    }

    inicio(){
      background(imgTelaInicial);
      push()
      fill('white');
      textSize(35);
      text("Aperte espaço para jogar", width/2 - 190, height/2 -30);  
      pop()
      if(keyDown('SPACE')){
        gameState = 'gamePlay'
      }
    }

    

}