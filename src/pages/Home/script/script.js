
const carrossel = document.querySelector('.carrossel');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let indiceAtual = 0;

btnProximo.addEventListener('click', () => {
    if (indiceAtual < carrossel.children.length - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0; 
    }
    console.log("Próximo: Índice atual =", indiceAtual); 
    atualizarCarrossel();
});

btnAnterior.addEventListener('click', () => {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = carrossel.children.length - 1; 
    }
    console.log("Anterior: Índice atual =", indiceAtual); 
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const offset = -indiceAtual * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
    console.log("Transformação aplicada:", carrossel.style.transform);
}