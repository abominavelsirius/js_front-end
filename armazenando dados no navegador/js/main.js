const form = document.querySelector('#novoItem')

form.addEventListener('submit', (evento) => {  // quando acontecer o evento submit ele vai executar uma função
    evento.preventDefault() // na hora que acontece o submit, me manda todos os dados, e esses dados to chamando de evento
                            // significando que a ação padrão que pertence ao evento não ocorrerá.
                            // prevenindo o evento padrão
   
    console.log(evento) // vai aparecer um objeto gigante com todas informações necessárias e q podem ser uteis
    // console.log(evento.target[0].value) // retorna o que foi escrito
    // console.log(evento.target[1].value) // retorna a quantidade

    // forma mais adequada
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value) // a partir do nome do input tem os dados agora


})
