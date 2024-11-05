let num = document.querySelector('input#fnum') //para puxa os dados
let lista = document.querySelector('select#flista') //
let res = document.querySelector('div#res') //
let valores = [] //para coloca todos os valores que for adicionado

function isNumero(n) { // esse é para verifica se vc colocou um nemero ou n 
    if(Number(n) >= 1 && Number(n) <= 200) { 
        return true 
    }else {
        return false
    }
    
}

function inLista(n, l) { // para sabe se o numero adicionado ja esta na lista ou n
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        
    }else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
}