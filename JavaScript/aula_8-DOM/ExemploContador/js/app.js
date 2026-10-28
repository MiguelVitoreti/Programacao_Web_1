let valorElemento = document.getElementById("valor")
let btnSoma = document.getElementById("soma")
let btnSubtracao = document.getElementById("subtracao")

let contador = 0

btnSoma.addEventListener('click',()=>{
    contador++
    valorElemento.textContent = contador
})

btnSubtracao.addEventListener('click', ()=>{
    contador--
    valorElemento.textContent = contador
})