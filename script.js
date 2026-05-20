const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#btn-mudar');
const caixa = document.querySelector('#caixa-magica');

// # -> id
// . -> classe
botao.addEventListener('click', () => {
    titulo.innerText = "DOM Manipulado com sucesso!";
    titulo.style.color = 'purple';
    document.body.style.backgroundColor = '#f0f0f0';
});

window.addEventListener('keydown', () => {
    console.log("Você apertou a tecla" + event.key);
});

window.addEventListener('keydown', (event) => {

    if(event.key === 'r' || event.key === 'R') {
        caixa.style.backgroundColor = 'red';
    }

    if(event.key === 'b' || event.key === 'B') {
        caixa.style.backgroundColor = 'blue';
    }

    if(event.key === 'g' || event.key === 'G') {
        caixa.style.backgroundColor = 'green';
    }

    if(event.key === 'Enter') {
        caixa.style.width = '400px';
        caixa.style.height = '400px';
    }

    if(event.key === 'Backspace') {
        document.body.innerHTML = '';
    }

});