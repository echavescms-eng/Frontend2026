/*********************************************
 * Funções - são blocos de código que executa determinada tarefa
 * 1 modularidade
 * 2 escopo
 * 3 parametros
 * 4 retornos
 

let x = 10; //variavel de escopo global

function Saudar(x){

    //let y = 10; //variavel de escopo local
    
//bloco de codigo que executa uma tarefa
    console.log("Oi");
    console.log(x);

}

//bloco de condicao

let saudacao = "Ola mundo";
Saudar(saudacao);
*/

//ENTRADA DE DADOS PARA A FUNÇÃO QUE CHAMAMOS DE PARAMETROS
//SAIDA DE DADOS DA FUNÇÃO QUE CHAMAMOS DE RETORNO
/**uma variavel declarada fora de uma funcao
 * tem escopo global, uma variavel declarada
 * dentro de uma funcao tem escopo local
 */
const teclado = require("prompt-sync")();


function Somar(a, b){
    let resultado = a + b;
    return resultado;
} 

function Subtracao(a, b){
    let resultado = a + b;
    return resultado;
} 

function Multiplicacao(a, b){
    let resultado = a + b;
    return resultado;
} 

function Divisao(a, b){
    let resultado = a + b;
    return resultado;
} 

console.log("Digite uma opção:");
let opcao = teclado("1-Soma 2-Subtração 3-Multiplicação 4-Divisão");

switch(opcao){
    case 1:
        //pegar valores de x e y e depois 
        //ajustar/fazer o retorno
        Somar(x,y);
        break;
    case 2:
        Subtracao(x,y);
        break;
    case 3:
        Multiplicacao(x,y);
        break;
    case 4:
        Divisao(x,y);
        break;
    default:
        opcao();
        break;
}

console.log(result);