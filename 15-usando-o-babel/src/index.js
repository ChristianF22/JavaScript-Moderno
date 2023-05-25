//Média Aritmética Simples:
const averge = (...numbers) =>{
    const sum = numbers.reduce((accum, num) => accum + num,0)
    return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${averge(3,6,10,4,2)}`)

//Média Aritmética Ponderada:
const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight),0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight,0)
    return sum / weightSum
}

console.log(`Média Aritmética Ponderada: ${weightedAverage(
    {number:6, weight: 3 },
    {number:7, weight: 1 },
    {number:10, weight: 1}
)}`)

//Mediana:
const media = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b)=> a-b)
    const middle = Math.floor(orderedNumbers.length/2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }

    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return averge(firstMedian, secondMedian)
}

console.log(`Media: ${media(2,5,56,4,12,9)}`)
console.log(`Media: ${media(14,13,4,5,2,9)}`)

//Função da Moda:
const mode = (...numbers)=>{
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a,b)=>b[1] - a [1])
    return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)