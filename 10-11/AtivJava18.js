
const teclado = require("prompt-sync")();

let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor[i] = Number(prompt("Digite um número:"));
}

console.log("Ordem normal:");
console.log(vetor);

console.log("Ordem inversa:");
console.log(vetor.reverse());
