function setup() {
    createCanvas(500, 400);
  somDaTrilha.loop ();
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro ();
  mostraAtor ();
  movimentaAtor ();
  movimentaCarro ();
  voltaPosicaoInicialDoCarro ();
  verificaColisao ();
  incluiPontos ();
  marcaPonto ();
} 