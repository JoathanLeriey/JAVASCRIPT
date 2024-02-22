let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`O verto tem ${num.length} posições`)
console.log(`o primeiro valor do verto é ${num[0]}`)

let pos = num.indexOf(8) //ele vai busca se tem o numero que ta em chaves

if (pos == -1){
    console.log('o valo não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
