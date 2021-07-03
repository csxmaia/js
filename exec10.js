var lampada = false

function verificarLampada() {
  //"troque o estado da lâmpada"
  lampada = !lampada
  //retorna estado atual da lampada 
  return lampada
}

setInterval(() => {const estadoAtual= verificarLampada(); console.log(estadoAtual)} ,Math.random() * (4000 - 2000) + 2000);
