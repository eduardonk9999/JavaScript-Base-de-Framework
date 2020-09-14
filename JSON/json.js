/*
JSON
- JavaScript Object Notation (JSON) é um formato de organização
de dados, compostos por um conjunto de chave e valor. As aspas
duplas são obrigatórias, tanto na chave quanto no valor quando
este for uma string
*/
{
    "id": 1,
    "nome" "Eduardo"
}

/*
    Um formato comum é array's com objetos

*/

[
    {
        "id": 1,
        "aula": "JavaScript"
    },
    {
        "id": 2,
        "aula": "HTML"
    }
]

/*
JSON.parse() irá transformar um texto JSON em um objeto JavaScript.
JSON.string() irá transformar um objeto JavaScript em uma string no formato JSON

*/
const textoJSON = '{"id": 1,"aula": "JavaScript"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoONJ = {
    cidade: "Rio de Janeiro",
    rua: "Ali Perto",
    pais: "Brasil",
    numero: 50,
}


const enderecoJSON = JSON.stringify(enderecoJSON);