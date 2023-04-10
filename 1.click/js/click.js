var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {

    if(container.style.display === 'block') { // se a propriedade display que está em style for padrão
        container.style.display = 'none'; // irá colocar o display como none
    } else {
        container.style.display = 'block'; // se não, irá colocar como block
    }

})