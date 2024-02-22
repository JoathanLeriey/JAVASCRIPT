let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores) sem muita formatação

/* forma burro
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length ; pos++){ //dessa forma fica mais bonita
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}*/

for(let pos in valores ) { // se ler: para cada posição dentro de num | in se lé dentro ou em
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
