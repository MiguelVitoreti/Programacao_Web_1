/*
Operadores Lógicos

&& : ("E" lógico)
|| : ("Ou" Lógico)
! : ("Não" Lógico)

*/

//Exemplos

let num1 = 10
let num2 = 15
let num3 = 2


//Condições Simples
if(num1 >= num2 ){
    console.log("(True)Entra no if")
} else {
    console.log("(False) Não entra no if")
}

//Exemplo

//Condições Compostas
if(num1 >= num2 && num1 != num3 ){
    console.log("(True)Entra no if")
} else {
    console.log("(False) Não entra no if")
}

//Exemplo

//Condições Compostas com 3 situações
if(((num1 >= num2) && (num1 != num3)) || (num1 != num3) ){
    console.log("(True)Entra no if")
} else {
    console.log("(False) Não entra no if")
}

//Exemplo Simples negada

if(!(num1 >= num2)){
    console.log("(True)Entra no if")
} else {
    console.log("(False) Não entra no if")
}