
const teclado = require("prompt-sync")();

let mat = [];

for (let i = 0; i < 10; i++) {
    mat[i] = [];

    for (let j = 0; j < 15; j++) {
        mat[i][j] = Number(prompt("Digite um número:"));
    }
}

for (let i = 0; i < 10; i++) {
    let soma = 0;

    for (let j = 0; j < 15; j++) {
        soma += mat[i][j];
    }

    console.log("Soma da linha " + i + ": " + soma);

    if (soma % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

for (let j = 0; j < 15; j++) {
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += mat[i][j];
    }

    console.log("Soma da coluna " + j + ": " + soma);

    if (soma % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}
