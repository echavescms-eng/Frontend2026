
const teclado = require("prompt-sync")();

let a = [
    [1, 2],
    [3, 4]
];

let b = [
    [5, 6],
    [7, 8]
];

let resultado = [];

for (let i = 0; i < 2; i++) {
    resultado[i] = [];

    for (let j = 0; j < 2; j++) {
        resultado[i][j] = 0;

        for (let k = 0; k < 2; k++) {
            resultado[i][j] += a[i][k] * b[k][j];
        }
    }
}

console.log("Resultado da multiplicação:", resultado);
