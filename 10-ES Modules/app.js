// Para conseguir extrair o conteudo do arquivo functions.js...ultilizaremos o "import{}" e no final o "from ./nome do arquivo"
// import {ss,nome} from ./nome do arquivo

import { label, input, br} from "./functions.js"

console.log(label({for: 'fullname', textContent:'Nome Completo'}))
console.log(input({id:'fullname', name: 'fullname', placeholder: ' Digite seu nome completo.'}))
console.log(br()) 