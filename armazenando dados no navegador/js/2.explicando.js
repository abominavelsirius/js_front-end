const form = document.querySelector('#novoItem')
const lista = document.getElementById('lista') // todas as vezes que executa a função cria essa constante lista novamente, e ela não precisa estar na function, então ela fica declarada como uma variavel comum ao nosso codigo inteiro e só ser chamada no finalzinho na hora de adicionar o lista.appendChild(novoItem)

form.addEventListener('submit', (evento) => {  
    evento.preventDefault() 

    // pra ficar mais fácil de chamar, ao invés de por todos os comandos toda hora, criaremos essas 2 constantes pra nome e quantidade.
    const nome =  evento.target.elements['nome'] // lembrando que evento é o parametro que retorna todos os dados quando clica no submit
    const quantidade =  evento.target.elements['quantidade'] // então o evento chama o target(alvo) com os valores dentro dos elementos [nome e quantidade]

    criaElemento(nome.value, quantidade.value) 

     nome.value = "" // isso fará com que toda vez que enviar um item, ele irá esvaziar o bloco pra escrever outro
     quantidade.value = "" 

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


        // agora usaremos o localStorage para armazenar os dados que foram colocados no submit
        // e ao invés de recarregar a página e sumir, eles permanecerão ali guardados, salvos.

        localStorage.setItem("nome", nome) 
        localStorage.setItem("quantidade", quantidade)

        // indo em F12, Storage
        // percebemos um problema. Ele guarda oque for escrito no submit
        // porém, escrevendo um outro elemento, ele guardará somente esse outro elemento
        // ele vai sobrescrever em cima do que já tinha sido criado antecedentemente
        // então vamos ver como resolver isso agora.

    }

