let pontos = 0;
                          //FUNCTIONS

function mostraPontos(){
  fill(0)
  rect(450,7,20,20)
  textSize(25)
  fill(color(255,240,0))
  text(pontos, 453, 26)
}

function marcaPonto(){ 
  if (yAtor < 9){pontos++;
                 voltaPosicaoInicial()
                 somDoPonto.play()
  }
}