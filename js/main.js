const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {

    elemento.addEventListener('click', (evento) => {
        // console.log(evento)
        // console.log(evento.target.dataset.controle)
        if(manipulaDados(evento.target.parentNode, evento.target.dataset.controle)) {
            atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle)
        }
        
    })

} )

function manipulaDados(controle, operacao) {

    const peca = controle.querySelector('[data-contador]')
    // console.log(peca)
    let valor = parseInt(peca.value)
    let lRet = true

    if(operacao === '-' && valor > 0) {
        peca.value = valor - 1
    } else if(operacao === '+') {
        peca.value = valor + 1
    } else {
        alert('O valor não pode ser inferiro a 0.')
        lRet = false
    }

    return lRet

}


function atualizaEstatistica(peca, operacao) {
    
    let valor

    estatisticas.forEach( (elemento) => {

        valor = parseInt(elemento.textContent)

        if(operacao === '-') {
            elemento.textContent = valor - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = valor + pecas[peca][elemento.dataset.estatistica]
        }

    })

}