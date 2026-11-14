
const teclado = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(teclado("Digite o " + i + "º número: "));
    soma = soma + numero;
}

let media = soma / 5;

console.log("A média dos números é: " + media);
