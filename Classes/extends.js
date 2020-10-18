/*
É possível criarmos uma subclasse, esta irá ter acesso aos
métodos de classe  
*/

class Veiculo {
    contructor(rodas){
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
honda empinar();