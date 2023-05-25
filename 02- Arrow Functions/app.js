// EXEMPLO 1
const sub = (a,b) =>{
    return a - b
}

console.log(`O valor da subtração foi: ${sub(20,10)}`)

// EXEMPLO 2
const mult = (c,d) => c * d
console.log(`O valor sa multiplicação foi: ${mult(2,2)}`)

// EXEMPLO 3

const ope = (a,b,c,d) => a + b - c * d
console.log(`O resultado da operção foi: ${ope(5,4,20,2)}`)

// EXEMPLO 4

const ope2 = (a,b,c,d,e) => (a * b - c) + d / e
console.log(`O resultado foi: ${ope2(30,15,8,50,5)}`)

// exemplo 4 não precisa usar os "()"

const duble = n => `O dobro de ${n} é ${n * 2}`
const numb = 15
console.log(duble(numb))

// Exemplo 5
const trip = n => `O triplo de ${n} é ${n * 3}`
const numb2 = 20
console.log(trip(numb2))

// Usando o arrow functions em um caso de uso real

const towns = ['Fortaleza', 'São Paulo' , 'Recife' , 'Florianópolis', 'Florínea']

const startingWithF = towns.filter(town => town[0] === 'F')

console.log(startingWithF)

// Exemplo 5

const materials = ['Hydrogen','Helium','Lithium','Beryllium']
  
  console.log(materials.map(material => material.length))

//Exemplo 6
const paraemtro = (x) =>{
  const resultado = (x * 2)
  return resultado
}
console.log(`O dobro de ${paraemtro(3)}`)
//Exemplo 7
const media = (a,b) =>{
  const result = (a+b)/2
  return result
}
console.log(`O valor da media é ${media(2,2)}`)
//Exemplo 8
const maiorIdade = (idade)=>{
  if(idade > 18){
    return "Maior de idade"
  }if(idade < 18){
    return "Menor de idade"
  }else{
    return "operção invalida"
  }
}
console.log(`Vc é ${maiorIdade(22)}`)

