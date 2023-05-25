const dayjs = require("dayjs")

function birthday(data){
    const birthday = dayjs(data)
    const today = dayjs()

    const nome = "Christian Fonseca Da Rocha Pereira"
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, "day")

    console.log(`Nome: ${nome}`)
    console.log(`Idade: ${ageInYears} anos`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias`)
}

birthday("2003-06-24")