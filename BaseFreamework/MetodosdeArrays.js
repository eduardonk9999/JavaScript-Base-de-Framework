/*
Map, Filter, sempre vao retorna uma array nova
Reduce, sempre vai retornar um valor único 

*/


const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Constas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
 ];


// Só os preços "Filter"
const precosFiltro = precos.filter(preco => {
   return preco.includes("R$");
});


// Map, transformando tudo em numeros
const precosNumeros = precosFiltro.map(function(preco){
    console.log(preco);

    return +preco.replace("R$ ", "");
});


// Reduce

/*
numeroAnterior vai ser o Acumulador

*/
const total = precosNumeros.reduce(function(numeroAnterior, numeroAtual){
    console.log(numeroAnterior, numeroAtual);

    return numeroAnterior + numeroAtual;
    
}, 0);
 
console.log(total); 