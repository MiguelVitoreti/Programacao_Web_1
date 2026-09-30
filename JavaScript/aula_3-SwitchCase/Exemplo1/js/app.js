alert("Bem vindo a aula de Switch Case")
let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

let escolha = Number(prompt("Digite 1 para somar \nDigite 2 para subtrair \nDigite 3 para multiplicar \n Digite 4 para dividir"))

switch(escolha){
    case 1:
        let soma = num1 + num2 
        alert(`O valor da soma é:  ${soma}`)
        break
    case 2:
        let sub = num1 - num2 
        alert(`O valor da subtração é:  ${sub}`)
        break
    case 3:
        let multi = num1 * num2 
        alert(`O valor da subtração é:  ${multi}`)
        break    
    case 4:
        let div = num1 / num2 
        alert(`O valor da subtração é:  ${div}`)
        break      
    default:
        alert("ERRO! Escolha inválida")
} 