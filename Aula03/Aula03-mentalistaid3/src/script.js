var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var numeroChute = parseInt(document.getElementById("valor").value);
  if (numeroChute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você acertou.";
  } else if (numeroChute > 10 || numeroChute < 0) {
    elementoResultado.innerHTML =
      "Digite um número entre 0 e 10. Tente novamente";
  } else {
    elementoResultado.innerHTML = "Você errou.";
  }
}
