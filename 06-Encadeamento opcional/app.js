const user = {
    name: "Christian",
    email:"christianfonseca991@gmail.com",
    friends: [{
        name: "Milena",
        address:{
            street: "Rua José de Alencar",
            number: "639"
        }
    }],
    age: 55,
    phone:{
        countryCode: "+55",
        ddd: "85",
        number: "999506454"
    }

}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)