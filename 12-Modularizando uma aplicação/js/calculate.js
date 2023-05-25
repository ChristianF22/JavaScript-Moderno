
export default function calculate(){
    const resultadoInput = document.querySelector('#result')
    resultadoInput.value = 'ERROR'
    resultadoInput.classList.add('error')
    const result = eval(input.value)
    resultadoInput.value = result
    resultadoInput.classList.remove('error')
}