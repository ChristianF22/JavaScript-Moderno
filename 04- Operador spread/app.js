const towns = ['Christian', 'Mayara', 'Milena', 'Nicole', 'Alicia', 'Luiza']

console.log(towns)
console.log(...towns)
console.log(...towns[0])
console.log(...towns[1])

const townsCopy = towns

townsCopy.pop()
townsCopy.push('Claudia')

console.log({ towns, townsCopy})

//Clonando objetos com o spread
const townsClone = [...towns]

townsClone.push('Amanda')

console.log({towns, townsCopy, townsClone})

//Com objetos
const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = "Teste"

console.log({townsObj, townsObjClone})

// Exemplo
const exm = []
exm.push('cc')
exm.push('ip')

const exmCopy = exm
exmCopy.push('tcp')

const exmClone = [...exm]
exmClone.pop()
exmClone.push('dns')
exmClone.test = "Teste02"

console.log({exm, exmCopy, exmClone})