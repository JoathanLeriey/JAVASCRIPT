var agr = new Date()
var diaSem = agr.getDay()
/*
    0 == domingo
    1 == segunda
    2 == terça
    3 == quarta
    4 == quinta
    5 == sexta
    6 == sábado
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('ai dento')
        break
}