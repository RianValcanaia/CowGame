                           //Ator
let xAtor = 60;
let yAtor = 370;
let wAtor = 30;
let hAtor = 30
let colisao = false;
                            //FUNÇÕES
function mostraAtor(){
   image(imgAtor,xAtor,yAtor,wAtor,hAtor)
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 2}
  if (keyIsDown(83)){
    if (podeSeMoverY())
    yAtor += 2}
  if (keyIsDown(68)){
    if (podeSeMoverX2())
    xAtor += 2}
  if (keyIsDown(65)){
    if (podeSeMoverX())
    xAtor -= 2}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i< imgCarros.length; i = i+1){
    colisao = collideRectRect(xCarros[i], yCarros[i], wCarro , hCarro/2, xAtor, yAtor ,wAtor, hAtor)
    if (colisao){
      voltaPosicaoInicial();
      somDaColisao.play()
      //se o som for tocado apenas uma vez utilizamos o .play
        if (pontosMaiorQueZero()){pontos -=1}
//função importada do p5.collide2d.js do github
    }
  }
}

function voltaPosicaoInicial(){
 yAtor = 370; xAtor = 60; vCarros = [2,2.3,3,2.6,2.4,2] 
}

function pontosMaiorQueZero(){
  return pontos > 0  
//return irá mostrar um verdadeiro ou falso para poder executar a função
}

function podeSeMoverY(){
  return yAtor < 370
}

function podeSeMoverX(){
  return xAtor > 0
}

function podeSeMoverX2(){
  return xAtor + wAtor < 500
}

