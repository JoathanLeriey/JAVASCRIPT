function verifica() {
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    var data = new Date()
    var ano = data.getFullYear()

    if (fano.value == 0 || fano.value > ano) { //micro validação
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsexo = document.getElementsByName('radsexo') //peguei pelo nome
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') //cria uma tag (imagen)
        img.setAttribute('id', 'foto') // img vai recebe um atributo (que sera um id com o nome foto) 

        if (fsexo[0].checked) { //ele vai checa se o elemento selecionado e o primeiro
            genero = 'Homen'

            if (idade >= 0 && idade < 10) {
                //crinça
                img.setAttribute('src','imagens/bebe-homen.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/joven-homen.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adulto-homen.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-homen.png')
            }

        } else { //se n for ele vai fazer isso
            genero= 'Mulher'

            if (idade >= 0 && idade < 10) {
                //crinça
                img.setAttribute('src','imagens/bebe-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-mulher.png')
            }
        }
        res.innerHTML = `Dectectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona um elemento (seria coloca um conteudo)
    }
}