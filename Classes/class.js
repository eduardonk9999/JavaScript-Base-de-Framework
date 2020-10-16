/*
Class

O ES6 trouxe uma nova sintaxe para implementarmos funções
construtoras. Agora podemos utilizar a palavra chave class.
É considerada syntactical sugar, pois por baixo dos planos continua
utilizando o sistemas de protótipos de uma função construtora para cirar a classe.

*/

class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    elelement() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const blueButton = new Button('Comprar', 'blue');