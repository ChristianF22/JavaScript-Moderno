function soma(...numbers){
    return numbers.reduce((accum,num) => accum + num,0)
}

function multi(...valores){
    return valores.reduce((ddd, nums) => ddd * nums,1)
}


console.log(soma(1,2,3,8))
console.log(multi(2,2))


