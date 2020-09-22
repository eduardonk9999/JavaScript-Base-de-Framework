function handleMouseMove(event) {
    // Pegando Propriedades expecificas:
    const clientX = event.clientX;
    const clientY = event.clientY;


    // Com Destructuring
    const { clientX, clientY } = event;
}

document.documentElement.addEventListener("mousemove", handleMouseMove);


// Podemos passas a desestruturação direto como parametro
function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);



// Em Arrays
const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2);



//////


// No react vai ser comum nos hooks
/*
O primeiro valor é o blue, o segundo é a funcao.


*/

const useState = [
    "blue",
    function (color) {
        useState[0] = color;
    }
];

const [color, setColor] = useState;

setColor("red"); 