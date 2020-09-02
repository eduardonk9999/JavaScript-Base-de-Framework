const blockchain = fetch('https://blockchain.info/ticker');
blockchain.then(b => b.json())
.then(function(body){
//    setInterval(function(){
//     console.log(body.BRL);
//    }, 1000)
})