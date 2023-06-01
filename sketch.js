function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop()
  //se o som for para ser tocado varias vezes utilizamos o .loop
}

                              //DRAW
function draw() {
  background(imgEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarros();
  loopCarros()
  verificaColisao()
  mostraPontos()
  marcaPonto()
  aumentaVelocidadeCarros()
}

                         //FUNCTIONS

