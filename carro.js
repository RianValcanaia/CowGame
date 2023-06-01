//CARROS
             //[0],[1],[2]
let xCarros = [600,700,850,750,650,800]
let yCarros = [40,96,150,210,266,320]
let vCarros = [2,2.3,3,2.6,2.4,2]
let hCarro = 50;
let wCarro = 40
                                  //FUNÇÕES
function mostraCarros(){
  for (let i = 0; i < imgCarros.length; i++){
  image(imgCarros[i], xCarros[i] , yCarros[i] , hCarro, wCarro)
  
//Para descobrir a quantidade de elementos de uma lista, podemos usar a palavra .length
//i++ é igual a i=i+1
  }
}

function movimentaCarros(){
  for (let i = 0; i < xCarros.length; i++){
    xCarros[i] -= vCarros[i]
  }
}

function loopCarros(){
  for (let i = 0; i < xCarros.length; i++){
       if (passouTodaATela(xCarros[i])){
           xCarros[i] = 600;
       }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -40;
}

function aumentaVelocidadeCarros(){
  if (pontos > 5){vCarros = [3,3.3,4,3.6,3.4,3]
  }
}