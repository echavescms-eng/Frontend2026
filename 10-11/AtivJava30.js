const teclado = require("prompt-sync")();


let mat = [];

for (let i = 0; i < 4; i++) {
    mat[i] = [];

    for (let j = 0; j < 4; j++) {
        mat[i][j] = Number(prompt("Digite um número:"));
    }
}

let opcao;

do {
    opcao = Number(prompt(
        "MENU\n" +
        "1 - Imprimir matriz\n" +
        "2 - Somar quadrados da primeira coluna\n" +
        "3 - Somar terceira linha\n" +
        "4 - Somar diagonal principal\n" +
        "5 - Somar índices pares da segunda linha\n" +
        "0 - Sair"
    ));

    switch (opcao) {

        case 1:
            console.log("Matriz:");
            console.log(mat);
            break;

        case 2:
            let soma1 = 0;

            for (let i = 0; i < 4; i++) {
                soma1 += mat[i][0] ** 2;
            }

            console.log("Soma dos quadrados:", soma1);
            break;

        case 3:
            let soma2 = 0;

            for (let j = 0; j < 4; j++) {
                soma2 += mat[2][j];
            }

            console.log("Soma da terceira linha:", soma2);
            break;

        case 4:
            let soma3 = 0;

            for (let i = 0; i < 4; i++) {
                soma3 += mat[i][i];
            }

            console.log("Soma da diagonal principal:", soma3);
            break;

        case 5:
            let soma4 = 0;

            for (let j = 0; j < 4; j++) {
                if (j % 2 == 0) {
                    soma4 += mat[1][j];
                }
            }

            console.log("Soma dos índices pares:", soma4);
            break;

        case 0:
            console.log("Programa encerrado!");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao != 0);
