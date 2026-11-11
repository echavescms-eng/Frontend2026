let cidades = ["Porto Alegre", "Viamão", "Alvorada", "Caxias do Sul", "Pelotas"];

    console.log(cidades);

for(let i=0;i<cidades.length;i++){
console.log(cidades[i]);
}

cidades.unshift("Canoas");
console.log(cidades);

cidades.shift();
console.log(cidades);

console.log(cidades.length);
