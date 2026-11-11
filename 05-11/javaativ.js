/****************************************************
 * 1)Crie um programa que solicite um numero e mostre todos os numeros pares de 1 até o numero digitado.
 * 



const prompt = require("prompt-sync")();

let numero_digitado = prompt("Digite um numero: ");

for (let i = 1; i <= numero_digitado; i++) {

    console.log(i);

    }

     */

    /****************************************************
     * 2)Crie um pequeno sistema de tabuada
     * /
     /*
     for(let i = 1; i <= 10; i++) {
        console.log(numero_digitado + " x " + i + " = " + (numero_digitado * i));
        /*

        /****************************************************
        * 3) Calcule a media de 3 notas e mostre se o aluno foi aprovado ou reprovado. A média para aprovação é 7.
        */
        

        const prompt = require("prompt-sync")();
        let nome-aluno = prompt("Digite o nome do aluno: ");

        let nota1 = prompt("Digite a primeira nota: ");
        let nota2 = prompt("Digite a segunda nota: ");
        let nota3 = prompt("Digite a terceira nota: ");

        Nota1 = Number(nota1);
        Nota2 = Number(nota2);
        Nota3 = Number(nota3);

        let Media = (nota1 + nota2 + nota3) / 3;

        if (Media >= 0 && Media <= 10) {
            if (Media >= 7) {
            console.log("Aluno aprovado com média: " + Media);
        } else if (Media <= 6 && Media >= 4) {
            console.log("Aluno em recuperação com média: " + Media);
        } else {
            console.log("Aluno reprovado com média: " + Media);
        }
        }