const btn = {
    get element() {
        return thid._element;
    }
    set element(tipo){
        this._element = document.createElement(tipo);
    }
}

button.element = 'button';
button.element;
