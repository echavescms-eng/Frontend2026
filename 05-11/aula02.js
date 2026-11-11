/**********************************
 * Arrays - Estruturas de dados 
 * quando a gente precisa armazenar dados em um aunica variavel 
 */

let alunos = ["João", "Maria", "José", "Ana", "Pedro"];

//mostra todos os alunos
    console.log(alunos);
//mostra um aluno especifico
    console.log(alunos[0]);

    for(let i=0;i<alunos.length;i++){
        console.log(alunos[i]);
    }

/*ex 02*/
let frutas = ["maça", "banana", "kiwi", "tomate"];

console.log(frutas.length); //retorna o tamanho do array
frutas.push("laranja"); //acrescenta novo item
console.log(frutas);

console.log(frutas.length);

//remove um elemento na ultima posição

frutas.pop();
console.log(frutas);


//adicionar ao inicio do array

frutas.unshift("morango");
console.log(frutas);

//remove o primeiro elemento

frutas.shift();
console.log(frutas);

//verifica se um elemento existe

console.log(frutas.includes("uva"));

