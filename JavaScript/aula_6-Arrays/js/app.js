/*
Arrays em JavaScript

Variável armazena apenas 1 valor
enquanto array armazena multiplos valores



//Ex1

let frutas = ["Maça", "Banana", "Laranja"]
console.log(frutas)
console.log(frutas[0])



let frutas = ["Maça", "Banana", "Laranja"]
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i] + "\n")
}   



//metodo dos arrays

push() - Adiciona 1 item
pop() - Remove 1 item
shift() - remove o inicio
unshift() - adiciona ao inicio
length - conta o tamanho do array


//Ex2
*/

let frutas = ["Maça", "Banana", "Laranja"]
frutas.push("Morango")
frutas.unshift("Limão")
frutas.pop()

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i] + "\n")
}  