let paragrafo = document.getElementById("PrimParag")
let paragrafo2 = document.getElementById("SegParag")
let div1 = document.getElementById("Div1")

function mudarParag(){
    paragrafo.style.color="Red"
    paragrafo.textContent = "Paragrafo atualizado"
}

//Mudar cor do primeiro paragrafo
function mudarCor(){
    paragrafo.style.color="BLue"
    paragrafo.textContent = "Cursor entrou"
}

function mudarCorSaida(){
    paragrafo.style.color="green"
    paragrafo.textContent = "Cursor saiu"    
}

//Quadrado
function mudarCorDiv(){
    div1.style.backgroundColor="Pink"
    paragrafo2.textContent="Cursor Entrou na div"
}
function mudarCorDivSaida(){
    div1.style.backgroundColor="Black"
    paragrafo2.textContent="Cursor Saiu na div"
}