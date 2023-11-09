function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = document.querySelector('#imagem') 

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora`

    if (hora >= 0 && hora < 12) {
        //boa dia
        img.src = 'imagens/manha.png' //precisa coloca a pasta tambem se n tive em pasta separadas
        document.body.style.background = '#d1ab6d'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#833a2e'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#14223c'
    }
}
