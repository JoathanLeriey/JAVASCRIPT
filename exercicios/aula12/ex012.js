var agr = new Date()
var hora = agr.getHours() //com get vc pega quasse tudo
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia flor do dia')
} else if (hora <= 18) {
    console.log('Boa Tarde! estuda vagabundo')
} else {
    console.log('Boa noite dormi vagabundo')
}