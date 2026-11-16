
const teclado = require("prompt-sync")();

let mat = [];
let vetor = [];

for (let i = 0; i < 50; i++) {
    mat[i] = [];

    for (let j = 0; j < 50; j++) {
        mat[i][j] = Number(prompt("Digite um número:"));
    }
}

for (let i = 0; i < 50; i++) {
    vetor[i] = mat[i][i];
}

console.log("Diagonal principal:", vetor);
