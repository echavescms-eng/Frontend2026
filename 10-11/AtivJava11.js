
const teclado = require("prompt-sync")();

let peso = Number(teclado("Digite seu peso em kg: "));
let altura = Number(teclado("Digite sua altura em metros: "));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}