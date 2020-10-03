const pokemons = [
    {
        name: 'Pikachu',
        type: 'eletric'
    },
    {
        name: 'Squirtle',
        type: 'water'
    },
    {
        name: 'Magikarp',
        type: 'water'
    }
];

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    console.log(pokemonAtual);

    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual);

    return pokemonsPorTipo;

}, {})


console.log(pokemonsPorTipo.water)