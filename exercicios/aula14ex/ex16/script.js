function contar() {
    var inicio = document.querySelector('#inicio')
    var ini = Number(inicio.value)

    var fim = document.querySelector('#fim')
    var fi = Number(fim.value)

    var passa = document.querySelector('#passa')
    var pas = Number(passa.value)

    var res = document.querySelector('#res')
    var soma = ini

    if (ini > fi) {
        window.alert('ERRO confira os dados')
    } else {
        for ( ini ; fi >= soma ; soma = soma + pas){
            res.innerHTML = soma
        }
    }
}