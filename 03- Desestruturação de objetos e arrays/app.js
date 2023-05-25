const person = {
    name: "Christian",
    job: "Dev Software",
    parents: ["Claudio", "Elaine"]
}

// Quebrando o objeto
const {name, job, parents} = person
console.log(name, job, parents)

// Quebrando um arrey
const [father, mother] = parents
console.log(`O nome do pai é ${father} e o nome da mãe é ${mother}`)

// Usando Função usando a foma mais comun
function createUser(person){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}
const christian = createUser(person)
console.log(christian)  

// Usando a Desestruturação na Função para poder simplificar
function createUser1({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name,
        job,
        parents
    }
}
const christian2 = createUser1(person)
console.log(christian2)

// Exemplo 05
