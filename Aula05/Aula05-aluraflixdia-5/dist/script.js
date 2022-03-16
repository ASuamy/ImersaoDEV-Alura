function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  if (filme.endsWith(".jpg")) {
    listarFilmesNaTela(filme);
  } else {
    console.error("Endereço inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">"; //associar o campo ao link da imagem que eu quero
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}