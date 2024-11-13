let num = document.querySelector('input#fnum')
let lista = document.querySelector('Select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){ //para checa ser é um numero e se ele ta ja na lista 
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('tudo certo')
    } else {
        window.alert('valor invalidor ou na lista.')
    }
}