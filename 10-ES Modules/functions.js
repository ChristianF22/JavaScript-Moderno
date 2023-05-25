//Para importa o conteudo do arquivo functions.js...coloca o "export" no começo de uma função ou de uma variavel
// export function ss()
// export const nome = "say my name"

export function label(attributes){
    const element = document.createElement('label')
    Object.assign(element,attributes)
    return element
}

export function input(attributes){
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

export function br(){
    const element = document.createElement('br')
    return element
}