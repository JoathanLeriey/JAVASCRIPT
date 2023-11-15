var us = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter(){
    var res = document.querySelector('#res')
    var rs = Number(window.prompt('Quanto R$ você tem na carteira?'))
    var con = rs * us

    res.innerHTML = `Com ${rs}R$ que vc tem considerando a cotação ${us}US$ vc vai consegui converte ${con}US$`
}