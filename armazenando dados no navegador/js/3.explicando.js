const form = document.querySelector('#novoItem')
const lista = document.getElementById('lista') 
const itens = [] // um array que servirá como sequência de objetos, para não reescrever no localStorage

form.addEventListener('submit', (evento) => {  
    evento.preventDefault() 

    const nome =  evento.target.elements['nome'] 
    const quantidade =  evento.target.elements['quantidade'] 

    criaElemento(nome.value, quantidade.value) 

     nome.value = "" 
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


        // no JS, toda vez que temos uma chave valor e a gente quer salvar o que se chaam de dicionário, usamos objeto
        // então vamos transformar esse elemento chamado itemAtual em um objeto

        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
        }

        itens.push(itemAtual) // a função para inserir o elemento no array 


        // agora ao invés de enviarmos duas informações, vamos usar uma unica informação chamada "itens"
        localStorage.setItem("item", JSON.stringify(itens)) 

        // só que ele salva como object, o localStorage só lê elemento do tipo JSON, só lê uma string
        // então é preciso transformar o elemento em string, colocando JSON.stringfly (transformará o JSon em string)
        // ele salva com as chaves, como a representação de um objeto

    }

