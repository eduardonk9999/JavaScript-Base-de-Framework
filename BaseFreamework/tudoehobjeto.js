/*
Propriedades são classes
Métodos são funções

*/

const menu = {
    class: ".principal",
    ativar() {
        const menuElement = document.querySelector(this.class);
        console.log(menuElement);
    }
}

menu.ativar();