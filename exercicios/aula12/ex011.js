var idade = 67
console.log(`Voce tem ${idade} idade`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

/* Umas das formas de fazer
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('voto opcional')
    } else {
            console.log('Voto obrigatorio')
        }
    }
} 
*/