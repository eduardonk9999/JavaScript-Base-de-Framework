const topBrazilMovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributeBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 17050000, distributeBy: 'Paramount / 20th Century' },
    { title: 'O Rei Leão', peopleAmount: 16267649, distributeBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributeBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 13035000, distributeBy: 'Universal' },
    { title: 'Nada a Perder', peopleAmount: 11944985, distributeBy: 'Paris Filmes' },
    { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributeBy: 'Paris / Downtown Filmes' },
    { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributeBy: 'Zazen' },
    { title: 'Os Vingadores', peopleAmount: 10968065, distributeBy: 'Disney' },
    { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributeBy: 'Embrafilme' },
]

console.log(
    topBrazilMovies
        .filter(({ distributeBy }) => distributeBy === 'Disney' )
        .reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0)
    
); 

