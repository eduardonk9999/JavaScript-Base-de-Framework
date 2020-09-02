
const btnCep = document.querySelector('.btnCep');

btnCep.addEventListener('click', function(event){
    event.preventDefault();
    const cepInput = document.querySelector('.cep').value;

    console.log(cepInput);

    const cep = fetch(`https://viacep.com.br/ws/${cepInput}/json`);
    cep.then(C => C.json())
    .then(function(body){
        console.log(body);
        const rua = document.querySelector('.rua');
        const bairro = document.querySelector('.bairro');
        const localidade = document.querySelector('.localidade');


        rua.innerHTML = body.logradouro;
        bairro.innerHTML = body.bairro;
        localidade.innerHTML = body.localidade;

    })
    


});