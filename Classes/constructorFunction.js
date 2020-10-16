/*
Funções responsáveis pela ciração de objetos. O conceito de uma
função construtora de objetos é implementado em outras linguagens como Classes.
*/

function Button(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    
    return buttonElement;
}


const blueButton = new Button('Comprar', 'blue');

