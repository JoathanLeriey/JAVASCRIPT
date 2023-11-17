function calcular() {
    let res = document.querySelector('#res')

    let nome = window.prompt('Qual é o nome do funcionário')
    let sala = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let pon = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let alme = sala * (pon / 100)
    let salanovo = sala + alme

    res.innerHTML += `<h1>${nome} recebeu um aumento salarial!</h1>`
    res.innerHTML += `<p>O salario atual era R$ ${sala.toFixed(2).replace('.' , ',')}.</p>`
    res.innerHTML += `<p>Com um aumento de ${pon}%, salário vai aumentar R$ ${alme.toFixed(2).replace('.' , '.')} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${salanovo}.</p>`
}