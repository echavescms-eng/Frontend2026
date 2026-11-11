const teclado = require("prompt-sync")();

console.log("Escolha uma opção...");

let opcao = Number(teclado("1-Retângulo \n 2-Quadrado \n 3-Circunferência \n 4-Triângulo \n"));

// retangulo
let baseRetangulo;
let alturaRetangulo;
let areaRetangulo;
let perimetroRetangulo;


// quadrado
let ladoQuadrado;
let areaQuadrado;
let perimetroQuadrado;


// circulo
let areaCircunferencia;
let perimetroCircunferencia;
let raioCircunferencia;


// triangulo
let lado1Triangulo;
let lado2Triangulo;
let lado3Triangulo;
let perimetroTriangulo;



let resultado;

if(opcao == 1){
    let baseRetangulo = Number(teclado("Digite a base do seu retangulo:"));
    let alturaRetangulo = Number(teclado("Digite a altura do seu retangulo:"));
    areaRetangulo = (baseRetangulo * alturaRetangulo);
    console.log("Área do retângulo:", areaRetangulo);
    perimetroRetangulo = (alturaRetangulo + baseRetangulo + alturaRetangulo);
    console.log("Perímetro do retângulo:", perimetroRetangulo);

}

if(opcao == 2){
    let ladoQuadrado = Number(teclado("Digite o tamanho de um dos lados do quadrado:"));
    areaQuadrado = (ladoQuadrado * ladoQuadrado);
    console.log("Área do quadrado:", areaQuadrado);
    perimetroQuadrado = (ladoQuadrado + ladoQuadrado + ladoQuadrado + ladoQuadrado);
    console.log("Perímetro do quadrado:", perimetroQuadrado);

}

if(opcao == 3){
    let raioCircunferencia = Number(teclado("Digite o raio da circunferência:"));
    areaCircunferencia = (3.14 * raioCircunferencia * raioCircunferencia);
    console.log("Área da circunferência:", areaCircunferencia);
    perimetroCircunferencia = (2 * 3.14 * raioCircunferencia);
    console.log("Perímetro da circunferência:", perimetroCircunferencia);

}

if(opcao == 4){
    let lado1Triangulo = Number(teclado("Digite o primeiro lado do triângulo:"));
    let lado2Triangulo = Number(teclado("Digite o segundo lado do triângulo:"));
    let lado3Triangulo = Number(teclado("Digite o terceiro lado do triângulo:"));
    perimetroTriangulo = (lado1Triangulo +  lado2Triangulo + lado3Triangulo);
    console.log("Perímetro do Triângulo:", perimetroTriangulo);

}