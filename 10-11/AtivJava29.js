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
        resultado[i][j] = a[i][j] + b[i][j];
    }
}

console.log("Resultado da soma:", resultado);
