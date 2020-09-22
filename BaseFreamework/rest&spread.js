/*
 Rest, ou seja depois dos ...resto, depois dos ... coloca isso
*/
function showList(empresa, ...clients){
    console.log(empresa);
    console.log(clients);
}

showList("Origamid", "João", "Maria");

// empresa = Origamid;
// clientes = ["João", "Maria"];



/*
Spread, ao invés de pegar o resto, você vai estar espalhando
*/

const numeros = [1,2,3,4,5,39,90];


/*Seria a mesma coisa de pegar numero por numero e colocar na function max, pq não podemos passar a array direto na funcao max: 
Math.max(numeros), dai para funcionar usamos o spread: 
*/
Math.max(...numeros);


// Exemplo de pegando lista no DOM
const items = document.querySelector("li");


// Se formos usar o map, não vai funcionar, pois o map precisa de um array para conseguir listar os itens chamados nele
items.map(item => {
    console.log(item);
});


// Então temos que transformar nossos items em uma array
[...items].map(item => function(){
    console.log(item);
});




/*
 Clonando Objetos
*/

const carro = {
    cor: "Azul",
    portas: 4,
    ano: 2020
}


// No clone tem turbo agora.
const cloneCarro = {...carro, turbo: true };
