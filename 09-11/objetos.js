/**
 * objeto - Sempre para representar algo do mundo real
 */

let cachorro = {
    //propriedades do objeto
    Nome: "Rex",
    Raca: "Pastor belga",
    Idade: 3,
    CorPelo: "Marrom",

    //metodos do objeto cachorro
    latir : function(){
        console.log("auauauauau");

    }
}

//imprime caracteriscas completas atribuidas ao objeto
console.log(cachorro);

//imprime caracteristica especifica do objeto
console.log(cachorro.Nome);
console.log(cachorro.Raca);
console.log(cachorro.Idade);
console.log(cachorro.CorPelo);



const Carro = {

    Marca: "Ford",
    Modelo: "Fiesta",
    AnoFabricacao: 2000,
    Cor: "Preto",
    Km: 40000,


    Andar : function(){
        console.log("vrum")
    },

    Acelerar : function(){
        console.log("vrum vrum")
    },

    Ligar : function(){
        console.log("vrummmm")
    },

    Frear : function(){
        console.log("ihrnnn")
    }


}