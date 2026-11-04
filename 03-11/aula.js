// comentário de uma linha

/**************************
    comentário de linhas
    outra linha de comentário
    mais uma
*/

// entrada -> pela web através de formulários ou eventos do DOM
// saída -> console do navegador ou pra página através de tag

// entrada de dados -> acontece pelo terminal
// saída dos dados -> acontece pelo terminal

/************************************* 
* VARIAVEIS
*  É uma caixa que armazena um tipo de valor na memoria do computador
*  no javascript podemos criar uma variavel de 3 formas


let idade = 10;     // sintaxe mais moderna do javascript
var Idade = 41;    // sintaxe mais antiga do javascript
const _idade = 32; // um valor que não pode ser alterado
*/
/***************************************
 * Tipos de dados
 * cada caixa tem um tipo de dado
 

// STRING - sequencia de caracteres
let nome = "João";

// NUMBER - numeros decimais ou inteiros
let IDADE = 40; // numero inteiro
let Altura = 1.75; // numero fracionado(com virgula)

// BOOLEAN - verdadeiro ou falso
let Aprovado = true;
var Dinheiro = false;

// UNDEFINED - a variavel não foi atribuida
let cidade;

// NULL - ausência intencional de valor
let telefone = null

// Retorno dos dados
console.log(nome)
console.log(IDADE)
console.log(Altura)
console.log(Aprovado)
console.log(Dinheiro)
console.log(cidade);
console.log(telefone);

// Retorno dos tipos
console.log(typeof nome)
console.log(typeof IDADE)
console.log(typeof Altura)
console.log(typeof Aprovado)
console.log(typeof Dinheiro)
console.log(typeof cidade);
console.log(typeof telefone);
*/

/*******************************
 * operadores aritméticos
 * são usados para realizar cálculos matemáticos
 

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2); // soma
console.log(numero1 - numero2); // subtração
console.log(numero1 * numero2); // multiplicação
console.log(numero1 / numero2); // divisão
console.log(numero1 % numero2); // resto da divisao
console.log(numero1 ** 2); // exponenciacao

/*********************************
 * operadores condicionais
 * são usados quando queremos 
 * que o código tome uma decisao


let idade = 35;

console.log(idade < 18);
console.log(idade > 18);
console.log(idade <= 18);
console.log(idade >= 18);

console.log(idade == 18); 
console.log(idade < 18);
console.log(idade < 18);

let number1 = "15";
let number2 = 15;

console.log(number1 == number2);
console.log(number1 === number2);
console.log(idade != 18);
 */

/***************************************
 * operadores lógicos
 * são usados quando queremos juntas operadores
 * condicionais

let idade = 20;
let possuiCarteira = true;

//     &&   - multiplicação 
//     ||   - soma binario
//     !    - negação
/* and - &&
 * 0 | 0 | 0
 * 0 | 1 | 0
 * 1 | 0 | 0
 * 1 | 1 | 1
 * 
 * our - ||
 * 0 | 0 | 0
 * 0 | 1 | 1
 * 1 | 0 | 1
 * 1 | 1 | 1
 */
/* 
console.log(idade > 18 && possuiCarteira); // verdadeiro

idade = 16;
possuiCarteira = false;

console.log(idade > 18 || possuiCarteira); // verdadeiro

let Gasolina = false;
console.log(!Gasolina);
 */
/****************************************
 * conversão de tipos - cast
 * converte texto para numero
 */
/* 
let numero1 = "10"; // string
let numero2 = "20"; // string

console.log(typeof numero1);
console.log(typeof numero2);

numero1 = Number(numero1);
console.log(typeof numero1);
 */

/****************************************
 * conversão de tipos - cast
 * converte numero para texto
 */
 
/*
let idade = 25;

console.log(typeof idade);
idade = String(idade);
console.log(typeof idade);

/****************************************
 * conversão de tipos - cast
 * converte numero inteiro para numero decimal
 */
/*
let valor1 = "15.90";
let valor2 = '25.75';

// numeros inteiros
console.log(parseInt(valor1));


console.log(parseInt(valor2));  

// numeros decimais
console.log parseFloat(valor1));
console.log( parseFloat(valor2));

*/

/****************************************
 * Entrada de dados pelo terminal
 */
/*
const prompt = require('prompt-sync')();

let numero1 = prompt("Digite um numero: ");
let numero2 = prompt("Digite outro numero: ");

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("numero digitado foi: " + numero1);
console.log("numero digitado foi: " + numero2);
ler resultado = numero1 + numero2;
console.log("resultado da soma é: " + resultado);
*/

/****************************************
 * Ordem de precedência
 * 1º () - parenteses
 * 2º ** - exponenciação    
 * 3º * / % - multiplicação, divisão e resto da divisão
 * 4º + - - adição e subtração
 */
/*
let resultado = 10 + 5 * 2;
console.log(resultado);

// let operacao = (numero1 + numero2) * numero3;

/****************************************
 * condicionais
 * estruturas de bloco
 
 
let notap1 = 7.8;
let notap2 = 8; 
let nota3 = 4;

let resultado = (notap1 + notap2 + nota3) / 3;

if(resultado >= 7){
    console.log("Aprovado, parabéns!");
} else {
    console.log("Reprovado, tente novamente!");
}

console.log("Saiu do bloco");
*/

/****************************************
 * blocos de condição
 * encadeamento de blocos de condição
 */
/*

let idade = 20;

if(idade > 18){
    console.log("Maior de idade");
    if(idade > 60){
        console.log("Idoso");
}
}else{
    console.log("Menor de idade");
    if(idade < 12){
        console.log("Criança");
    }
}
*/

/****************************************
 * Mais opções de blocos de condição
 */
/*
let nota = 7.5; 

if(nota > 7){
    console.log("Aprovado"); 
}
else if(nota == 7){
    console.log("Precisa estudar mais");
}
else {
    console.log("Recuperação");
}
*/
//Quando eu encadear um if dentro de outro ele só vai entrar no segundo if se o primeiro for verdadeiro, 
// caso contrário ele não vai entrar no segundo if.
//Ou eu encadeio ou eu uso o else if, mas não posso usar os dois juntos.

/****************************************
 * juntando condições com operadores lógicos
 */
/*
let nota = 7;

if (nota > 8 && nota < 10) {
    console.log("Excelente");
}
else{
    console.log("Precisa melhorar");
}
*/

/****************************************
 * switch case - estrutura de condição composta
 * é uma estrutura de decisão que permite testar uma variável
 */
 /*
let dia = 8;

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}
*/

/****************************************
 * Operadores ternários - estrutura de condição composta
 * é uma estrutura de decisão que permite testar uma variável
 */
/*
let idade = 20;

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);
*/
//primeiro vem a condição, depois o ? e depois o que vai acontecer se for verdadeiro e depois o : e o que vai acontecer se for falso.

//LET E VAR alocam memória de forma diferente, o LET aloca memória de forma dinâmica e o VAR aloca memória de forma estática. O LET é mais moderno e recomendado para uso, enquanto o VAR é mais antigo e não recomendado.
/****************************************
 * estruturas de repetição - for
 * é uma estrutura de repetição que permite executar um bloco de código várias vezes
 */
/*
 let i = 1;
for(condição de início; condição de continuação; expressão de atualização){}

/*

// 1º condição de início - é a variável que vai controlar o loop
// 2º condição de continuação - é a condição que vai determinar se o loop vai continuar ou não
// 3º expressão de atualização - é a expressão que vai atualizar a variável de controle do loop
for(i = 1; i < 100; i = i + 2){   //i = i + 1 é igual a i++ ou i += 1
    console.log("Repetição " + i);
}
*/

/****************************************
 * estruturas de repetição - while
 * é uma estrutura de repetição que permite executar um bloco de código várias vezes
 */
/*
let i = 1;
while(enquanto a condição for verdadeira){
    console.log("Repetição " + i);
    i = i + 2;
    while precisa de uma condição de parada, caso contrário ele vai entrar em loop infinito
}


let contador = 1;

while(contador < 5){
    console.log("Computador " + contador);
    contador++;
}

*/

/* TROLL
while(true){
    alert("Hackeado");
}



let indice = 1;

do {
    console.log(indice);
    indice++;
} while(indice < 5);

*/