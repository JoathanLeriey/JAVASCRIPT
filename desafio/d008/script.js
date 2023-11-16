function desconto(){
    let res = document.querySelector('#res')

    //perguntas
    let nome = window.prompt('Qual é o produto quue você está comprando')
    let valor = Number(window.prompt(`Qual é o preço de ${nome}`))

    //calculando
    let valordes = valor * (10 / 100)
    let valorfi = valor - valordes

    //mostrado resultado
    res.innerHTML += `<h1>Calculando desconto de 10% para ${nome}</h1>`
    res.innerHTML += `<p>O preço original era R$ ${valor.toFixed(2).replace('.' , ',')}</p>`
    res.innerHTML += `<p>Você acaba de ganha R$ ${valordes.toFixed(2).replace('.' , ',')} de desconto (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai paga R$ ${valorfi.toFixed(2).replace('.' , ',')} no produto ${nome}</p>`
}