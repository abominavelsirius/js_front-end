const form = document.querySelector('#novoItem')

form.addEventListener('submit', (evento) => {  
    evento.preventDefault() 

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value) 
})


    function criaElemento(nome, quantidade) {

    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li') 
    novoItem.classList.add('item') 

    const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = quantidade 

        novoItem.appendChild(numeroItem)
        novoItem.innerHTML += nome

        const lista = document.getElementById('lista')

        lista.appendChild(novoItem) 

    }

