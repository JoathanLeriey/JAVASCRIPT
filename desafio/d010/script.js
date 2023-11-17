function calcular() {
    let res = document.querySelector('#res')

    let a = Number(prompt('qual é o valor de a?'))
    let b = Number(prompt('qual é o valor de b?'))
    let c = Number(prompt('qual é o valor de c?'))

    var bascara = b ** 2 - 4 * a * c

    res.innerHTML += `<h1>Resolvendo Bhaskara</h1>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>o valor calculado foi <strong>&Delta; = ${bascara}</strong></p>`
}

