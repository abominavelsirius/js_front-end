const form = document.querySelector('#novoItem')

form.addEventListener('submit', (evento) => {  // quando acontecer o evento submit ele vai executar uma função
    evento.preventDefault() // na hora que acontece o submit, me manda todos os dados, e esses dados to chamando de evento

                            // preventdefault = significa  que a ação padrão que pertence ao evento não ocorrerá.
                            // prevenindo o evento padrão
                            // o que acontecia antes: ele retornava os dados do form para o proprio site
                            // e agora ele retornará os dados para o nosso console, para mim.
   
    console.log(evento) // vai aparecer um objeto gigante com todas informações necessárias e q podem ser uteis
    // console.log(evento.target[0].value) // retorna o que foi escrito
    // console.log(evento.target[1].value) // retorna a quantidade

    // forma mais adequada
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value) // a partir do nome do input tem os dados agora


    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)  // nome e quantidade
    // o submit chama a função criaElemento


    function criaElemento(nome, quantidade) {


    console.log(nome)
    console.log(quantidade)

    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li') // cria uma lista
    novoItem.classList.add('item') // adiciona classe dentro da lista chamada item

    const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = quantidade // innerHTML vai receber a quantidade colocada 
        console.log(numeroItem) // aparece lá o STRONG com determinado número alocado dentro de si

        // novoItem.innerHTML = numeroItem + nome
        // console.log(novoItem)

        // retorna um objeto no console, pois o elemento é criado em JS, e cria um objeto inteiro
        // ao invés do innerHTML, é usado o appendChild()
        // que vai inserior um elemento criado dentro do outro

        novoItem.appendChild(numeroItem)
        console.log(novoItem) // agora retorna <strong>10</strong> ao invés de objeto


        // é preciso icrementar um novo item, e agora sim, o innerHTML
        // já que ele já recebeu o objeto, é preciso acrescentar o nome

        novoItem.innerHTML += nome

        // e no console retorna "<strong>10</strong>Camisa branca"

        // <ul class="lista" id="lista">
        
        // a manipulação do css é via classe
        // a manipulação do js é via ID

        // agora é só colocar o item dentro dessa lista pra ele aparecer no site

        const lista = document.getElementById('lista')

        lista.appendChild(novoItem) // lista agora vai receber o novo item completo




    }

})
