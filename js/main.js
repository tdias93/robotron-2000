const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener("click", (evento) => {
    manipulaDados('somar')
} )

subtrair.addEventListener("click", (evento) => {

    manipulaDados('subtrair')

} )

function manipulaDados(operacao) {

    let valor = parseInt(braco.value)

    if(operacao === 'subtrair' && valor > 0) {
        braco.value = valor - 1
    } else if(operacao === 'somar') {
        braco.value = valor + 1
    } else {
        alert('O valor não pode ser inferiro a 0.')
    }

}