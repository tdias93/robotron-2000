const controle = document.querySelectorAll('[data-controle]')
// console.log(controle)

controle.forEach( (elemento) => {

    elemento.addEventListener('click', (evento) => {
        // console.log(evento)
        // console.log(evento.target.dataset.controle)
        manipulaDados(evento.target.parentNode, evento.target.dataset.controle)
    })

} )

function manipulaDados(controle, operacao) {

    const peca = controle.querySelector('[data-contador]')
    // console.log(peca)
    let valor = parseInt(peca.value)

    if(operacao === '-' && valor > 0) {
        peca.value = valor - 1
    } else if(operacao === '+') {
        peca.value = valor + 1
    } else {
        alert('O valor não pode ser inferiro a 0.')
    }

}