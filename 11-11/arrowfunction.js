const teclado = require("prompt-sync")();
/** 
function Somar(a,b){
    resultado = a + b;
    return resultado;
}
function Subtrair(a,b){
    resultado = a - b;
    return resultado;
}
function Multiplicar(a,b){
    resultado = a * b;
    return resultado;
}
function Dividir(a,b){
    resultado = a / b;
    return resultado;
}

console.log("Escolha uma opção...");

let opcao = Number(teclado("1-Somar \n 2-Subtrair \n 3-Multiplicar \n 4-Dividir \n"));
let numero1 = Number(teclado("Digite o operador \n"));
let numero2 = Number(teclado("Digite o numerador \n"));
let resultado;

switch(opcao){
    case 1:
        resultado = Somar(numero1,numero2);
        console.log("Soma:", resultado);
        break;

    case 2:
        resultado = Subtrair(numero1,numero2);
        console.log("Subtração:", resultado);
        break;

    case 3:
        resultado = Multiplicar(numero1,numero2);
        console.log("Multiplicação:", resultado);
        break;

    case 4:
        resultado = Dividir(numero1,numero2);
        console.log("Divisão:", resultado);
        break;
}
*/

/**
 * Função anonima
 * Uma função anonima é uma função que não carrega nome
 * ela é identificada e chamada através de uma variavel
 

const saudar = function(nomePessoa){
    return `Olá, ${nomePessoa}`;
}
let nomePessoa = teclado("Digite seu nome:");
console.log(saudar(nomePessoa));
*/ 

/**
 * funcao flexa
 * uma funcao é uma forma mais moderna de criar uma funcao
 * ela é mais rápida na sua execução.
 

const saudacao = (nomes)=>{
    return `Olá, ${nomes}`;// template string ${} serve para concatenar ou inserir código
}

let nome_pessoas = teclado("Digite seu nome:");
console.log(saudacao(nome_pessoas));
*/


/**
 * callback é quando uma função chama outras funções 
 */

/*
function saudar(){
    coletaNome(ajustaData());

}

const saud = ()=>{coletaNome, ajustaNome};
*/

/**
 * click        Quando clica em um elemento
 * dbclick      Quando dá dois cliques
 * mouseover    Quando o mouse passa sobre um elemento
 * mouseout     Quando o mouse sai de um elemento
 * keydown      Quando uma tecla é pressionada
 * keyup        Quando uma tecla é solta
 * input        Quando o conteúdo de um campo é alterado
 * change       Quando o valor de um campo é alterado e confirmado
 * submit       Quando um formulário é enviado
 * load         Quando a página termina de carregar
 * focus        Quando um campo recebe foco
 * blur         Quando um campo perde o foco
 */

