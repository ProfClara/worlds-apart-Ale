var gameState = 'start';
var protagonista;
var chaoFalso;

function preload(){
    imgTelaInicial = loadImage("./assets/Tela+Inicial.png");
}

function setup(){
    //criar a tela do jogo
    createCanvas(windowWidth, windowHeight);
    push()
    fill('black');
    protagonista = createSprite(60, height/2,50,150);  
    protagonista.visible  =  false;    
    chaoFalso = createSprite(width/2,height/2+100,width,20);
    chaoFalso.visible = false;
    pop() 
    
    

}

function draw(){
    background(0);
    if(gameState === 'start'){
            novoGame = new Start();
            novoGame.inicio();
        }
    if(gameState === 'gamePlay'){
            console.log(" oi já estamos jogando !!! ")
            gamePlay = new GamePlay();
            gamePlay.comeco();
            gamePlay.controles();
        }
    drawSprites();
}