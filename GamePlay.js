class GamePlay{

    constructor(){
       
    }

    comeco(){
        background('blue');
        protagonista.visible =  true;    
        protagonista.collide(chaoFalso);
        chaoFalso.visible =  true;    
                 
    }

    controles(){
        if(keyDown('D')){
            protagonista.position.x += 5;
        } 
        if(keyDown('w')){
            protagonista.position.y -= 10;
        } 
        if(keyDown('D')){
            protagonista.position.x += 5;
        } 
        //gravidade
        protagonista.y  +=3.5       
    }

}