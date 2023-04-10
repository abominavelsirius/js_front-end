const form = document.querySelector('#novoItem')
const lista = document.getElementById('lista') // todas as vezes que executa a função cria essa constante lista novamente, e ela não precisa estar na function, então ela fica declarada como uma variavel comum ao nosso codigo inteiro e só ser chamada no finalzinho na hora de adicionar o lista.appendChild(novoItem)

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


        lista.appendChild(novoItem) 

    }

