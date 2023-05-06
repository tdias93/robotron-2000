const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach( (elemento) => {

    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.parentNode, evento.target.textContent)
    })

} )

function manipulaDados(controle, operacao) {

    const peca = controle.querySelector('.controle-contador')
    let valor = parseInt(peca.value)

    if(operacao === '-' && valor > 0) {
        peca.value = valor - 1
    } else if(operacao === '+') {
        peca.value = valor + 1
    } else {
        alert('O valor não pode ser inferiro a 0.')
    }

}