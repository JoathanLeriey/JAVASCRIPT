function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //primera validação se todas as areas estao preenchidas
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        //length seia comprimento
        res.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //segunda validação se o passa esta com 1 ou mais 
        if (p <= 0){ 
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //chegando se á contagen é crescente ou regressiva
        if (i < f) { 
            //contagen crescente
            for (let c = i; c <= f; c += p){
            // c += p essa que disse que ele vai recepe ele msm mais o p
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagen regressiva
            for (let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}


/*      Meu modelo que n funciona direito
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
            res.innerHTML += soma
        }
    }
}*/