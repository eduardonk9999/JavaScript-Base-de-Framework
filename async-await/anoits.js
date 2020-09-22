/**
 A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
 O await irá indicar a promise que devemos esperar. Faz parte do ES8
 */

 async function puxarDados() {
     const dadosResponse = await fetch('./dados.json');
     const dadosJSON = await dadosResponse.json();

     document.body.innerText = dadosJSON.titulo;
 }

 puxarDados();