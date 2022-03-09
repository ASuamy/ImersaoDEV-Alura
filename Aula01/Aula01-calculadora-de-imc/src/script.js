var peso = parseFloat(prompt("Digite seu peso"))
var altura = parseFloat(prompt("Digite sua altura"))

var calculo = peso / (altura * altura)

var imc = calculo.toFixed(2)
alert("Seu IMC é " + imc)
