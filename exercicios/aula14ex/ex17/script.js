function gera(){
    var n1 = document.querySelector('#n1')
    var tab = document.querySelector('#seltab')

    if (n1.value.length == 0 ){
        alert('Por favor, digite um númro!')
    } else {
        n1 = Number(n1.value)
        var con = 1

        tab.innerHTML = '' // para limpa tabuada

        while (con <= 10){
            var item = document.createElement('option') 

            item.text = `${n1} x ${con} = ${n1 * con}`
            item.value = `tab${con}` //para da a cada item um value 

            tab.appendChild(item)

            con++
        }
        
    } 
}

/*          ANOTAÇÔES
for (n1 ; con <= 10 ; con++){
    
    var item = document.createElement('option') 
->basicamente no select precisa ter option esse comando eu to pedindo para cria
    
    item.text = `${n1} x ${con} = ${n1 * con}`
->basicamente eu to pedindo que na minha var item crie um texto
->vc pode fazer conta dentro desse cochetes e ele vai mostra a conta

    tabe.appendChild(item)
->basicamente eu to falando que minha var tab vai recebe um filho que seria a var item
}
*/