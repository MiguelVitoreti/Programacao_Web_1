/*
//Funções em js

//funções são blocos de códigos reutilzáceis

//Função simples
console.log("Função simples")
function saudacao(){
    console.log("Seja bem vindo")
}
saudacao()

console.log("")



//Função com parâmetro

let nomeUser = prompt("Qual é o seu nome")
function saudacao2(nome){
    console.log(`Seja bem vindo ${nome}`)
}
saudacao2(nomeUser)


//Ex2 - Função com parametro e retorno
function soma(num1, num2){
    return num1 + num2
}
console.log(`A soma dos números é: ${soma(421, 314)}`)

*/

//Ex3 - Arrow Function

let soma = (num1, num2) => {
    return num1 + num2
}

console.log(`A soma com Arrow Function é: ${soma(9, 314)}`)